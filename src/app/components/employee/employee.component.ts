import { Component, OnInit } from '@angular/core';

import { EmployeeService } from 'src/app/services/employee.service';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  public employees: object
  public empForm: FormGroup

  constructor(
    private employeeService: EmployeeService
  ) { }

  ngOnInit() {
    this.setEmpForm()
    this.getEmployee()
  }

  getEmployee() {

    this.employeeService.getEmployeeList().subscribe(
      (employees) => {
        this.employees = employees
      },
      (error) => {
        alert(error)
      }
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
    this.employeeService.addEmployeeInList(this.empForm.value)
  }

}
