import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        title: 'ikDV',
        loadComponent: () => import('./layout/layout.component').then(c => c.LayoutComponent),
        children: [
            {
                path: '',
                redirectTo: 'home',
                pathMatch: 'full'
            },
            {
                path: 'home',
                loadComponent: () => import('./screens/home/home.component').then(c => c.HomeComponent)
            },
            {
                path: 'about',
                loadComponent: () => import('./screens/about/about.component').then(c => c.AboutComponent)
            },
            {
                path: 'services',
                loadComponent: () => import('./screens/services/services.component').then(c => c.ServicesComponent)
            },
            {
                path: 'portfolio',
                loadComponent: () => import('./screens/portfolio/portfolio.component').then(c => c.PortfolioComponent)
            }
        ]

    }
];
