import { Routes } from '@angular/router';

// Components/Containers
import { CompanyComponent } from './components/company/company.component'

export const companyRoutes: Routes = [
  {
    path: '',
    redirectTo: 'list'
  },
  {
    path: 'list',
    component: CompanyComponent
  }
];