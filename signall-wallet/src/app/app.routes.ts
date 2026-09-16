import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '', data: { pageTitle: 'Dashboard', subtitle: 'Overview of your financial status' },
        loadComponent: () => import('./feature/dashboard/dashboard').then(m => m.Dashboard)
    }
];
