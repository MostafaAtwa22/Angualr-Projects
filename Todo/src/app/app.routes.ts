import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: 'todos',
        loadComponent: () => import('./Components/todos/todos').then(m => m.Todos)
    },
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'todos'
    },
    {
        path: '**',
        redirectTo: 'todos'
    }
];
