import { Route } from '@angular/router';
import { AuthGuard } from './services/auth.guard';

export const appRoutes: Route[] = [
    {
        path: 'login',
        loadComponent: () => import('./pages/login/login.component').then(c => c.LoginComponent)
    },
    {
        path: '',
        loadComponent: () => import('./pages/home/home.component').then(c => c.HomeComponent),
        // canActivate: [AuthGuard] // Commented out since the API is not working.
    }
];
