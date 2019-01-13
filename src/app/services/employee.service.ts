import { Injectable } from "@angular/core";
import { Store } from "@ngrx/store";
import { Observable, Observer } from "rxjs";

// Store
import * as EmpActions from '../store/employee/employee.actions'
import * as AppReducer from "../app.reducers";


@Injectable()
export class EmployeeService {

  constructor(
    private store: Store<AppReducer.AppState>
  ) {}

  getEmployeeList() {
    return Observable.create((observer: Observer<object | string>) => {
      
      this.store.select("Employee").subscribe(
        (employee) => { 
          observer.next(employee.EmployeeList) 
        },
        (error) => {
          observer.error(error)
        }
      )

    })
  }

  addEmployeeInList(formValues) {
    this.store.dispatch(new EmpActions.AddEmployee(formValues))
  }

  getEmployeeById(id) {
    return Observable.create((observer: Observer<object | string>) => {

      this.store.select("Employee").subscribe(
        (employee) => {
          if (employee && employee.EmployeeList && Object.keys(employee.EmployeeList || {}).length && employee.EmployeeList[id]) {
            observer.next(employee.EmployeeList[id])
          }
        },
        (error) => {
          observer.error(error)
        }
      )

    })
  }

  editEmployeeById(id, employee) {
    this.store.dispatch(new EmpActions.EditEmployee({
      id, employee
    }))
  }

}