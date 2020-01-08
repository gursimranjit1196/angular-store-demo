import { Component, OnInit } from '@angular/core';

import { FormGroup, FormControl } from '@angular/forms';

// Store
import { Store } from '@ngrx/store';
import { AppState, getEmployeeList } from '../../store';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  public employees: object
  public empForm: FormGroup

  constructor(
    private store: Store<AppState>
  ) { }

  ngOnInit() {
    this.setEmpForm()
    this.getEmployee()
  }

  getEmployee() {
    this.store.select(getEmployeeList).subscribe(
      (employees) => {
        this.employees = employees
      },
    )
    
  }

  setEmpForm() {
    this.empForm = new FormGroup({
      name: new FormControl('demo'),
      company: new FormControl('demo'),
      location: new FormControl('demo')
    })
  }

  onFormSubmit() {
  }

}
