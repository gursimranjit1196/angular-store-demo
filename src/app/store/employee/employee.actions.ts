import { Action } from "@ngrx/store";
import { EMPLOYEE_ACTIONS } from "../../constants/store";

export class AddEmployee implements Action {
  type = EMPLOYEE_ACTIONS.ADD
  
  constructor(public payload) {}
}

export class EditEmployee implements Action {
  type = EMPLOYEE_ACTIONS.EDIT

  constructor(public payload: { id: number, employee: object }) {}
}

export type EmployeeAction = AddEmployee | EditEmployee