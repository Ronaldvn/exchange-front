import { Routes } from '@angular/router';
import { LoginComponent } from './pages/auth/login/login.component';
import { LayoutComponent } from './components/layout/layout.component';
import { ListComponent } from './pages/exchange/list/list.component';
import { NewComponent } from './pages/exchange/new/new.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { authGuard } from './core/guards/auth.guard';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: '',
    component: LayoutComponent,
    canActivate: [authGuard],
    children: [
      {
        path: 'exchanges',
        component: ListComponent,
      },
      {
        path: 'exchanges-rate',
        component: NewComponent,
      },
    ],
  },
  {
    path: '**',
    component: NotFoundComponent,
  },
];
