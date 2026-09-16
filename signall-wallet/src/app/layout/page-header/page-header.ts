import { Component, input } from '@angular/core';

@Component({
    imports: [],
    selector: 'layout-page-header',
    templateUrl: './page-header.html',
})


export class PageHeader {
    pageTitle = input<string>('');
    subtitle = input<string>('');
}