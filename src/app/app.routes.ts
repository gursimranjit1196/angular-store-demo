import { Routes } from '@angular/router';
import { HomeComponent } from "./components/home/home.component";
import { EmployeeComponent } from "./components/employee/employee.component";
import { EmployeeEditComponent } from './components/employee-edit/employee-edit.component';

export const appRoutes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'employee',
    component: EmployeeComponent,
    children: [
      {
        path: ":id/edit",
        component: EmployeeEditComponent
      }
    ]
  },
  {
    path: 'company',
    loadChildren: './modules/company/company.module#CompanyModule'
  },
];