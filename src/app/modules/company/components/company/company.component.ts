import { Component, OnInit } from '@angular/core';

import { COMPANY_LIST } from "../../../../constants/company-list";

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.css']
})
export class CompanyComponent implements OnInit {

  public companies = COMPANY_LIST

  constructor() { }

  ngOnInit() {
  }

}
