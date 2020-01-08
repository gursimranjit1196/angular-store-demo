import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-employee-edit',
  templateUrl: './employee-edit.component.html',
  styleUrls: ['./employee-edit.component.css']
})
export class EmployeeEditComponent implements OnInit {

  public empForm: FormGroup
  public id
  public employee:object

  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.setForm()
    this.setEmpId()
  }

  setEmpId() {
    this.route.params.subscribe(
      (params) => {
        this.id = +params.id
        this.getEmployeeById()
      }
    )
  }

  setForm() {
    this.empForm = new FormGroup({
      name: new FormControl(''),
      company: new FormControl(''),
      location: new FormControl('')
    })
  }

  getEmployeeById() {
  }

  setFormValue() {
    this.empForm.setValue({
      name: this.employee["name"],
      company: this.employee["company"],
      location: this.employee["location"]
    })
  }

  onFormSubmit() {
  }

}
