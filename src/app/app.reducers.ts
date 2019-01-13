import * as EmployeeReducer from "../app/store/employee/employee.reducer";
import { ActionReducerMap } from "@ngrx/store";

export interface AppState {
    Employee: EmployeeReducer.State
}

export const reducer: ActionReducerMap<AppState> = {
    Employee: EmployeeReducer.EmployeeReducer
}