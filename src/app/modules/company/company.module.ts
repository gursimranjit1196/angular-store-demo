import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

// Component/Containers
import { CompanyComponent } from './components/company/company.component'

// Routes
import { companyRoutes } from './company.routes';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(companyRoutes)
  ],
  declarations: [
    CompanyComponent
  ]
})
export class CompanyModule { }