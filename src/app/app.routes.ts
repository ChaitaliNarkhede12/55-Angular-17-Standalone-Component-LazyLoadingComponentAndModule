import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'portfolio',
    loadChildren: () => import('../..//src/app/portfolio/portfolio.module').then(m => m.PortfolioModule)
  },
  {
    path: 'employee',
    loadComponent: () => import('../app/portfolio/employee/employee.component').then(m => m.EmployeeComponent)
  }
];
