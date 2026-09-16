import { Component, inject } from '@angular/core';
import { RouterOutlet, Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { filter, map, startWith } from 'rxjs/operators';
import { toSignal } from '@angular/core/rxjs-interop';
import { PageHeader } from '../page-header/page-header';

@Component({
    imports: [RouterOutlet, PageHeader],
    selector: 'layout-page-wrapper',
    templateUrl: './page-wrapper.html',
})
export class PageWrapper {

    private router = inject(Router);
    private activatedRoute = inject(ActivatedRoute);

    // Signal holding the active page's header info
    pageHeader = toSignal(
        this.router.events.pipe(
            filter((event) => event instanceof NavigationEnd),
            startWith(null), // Triggers on initial component load immediately
            map(() => {
                let currentRoute = this.activatedRoute.snapshot;

                // Traverse to the deepest active route snapshot
                while (currentRoute.firstChild) {
                    currentRoute = currentRoute.firstChild;
                }

                return {
                    pageTitle: currentRoute.data['pageTitle'] ?? '',
                    subtitle: currentRoute.data['subtitle'] ?? '',
                };
            })
        ),
        { initialValue: { pageTitle: '', subtitle: '' } }
    );
}