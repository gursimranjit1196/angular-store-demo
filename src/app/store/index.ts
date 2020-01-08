import { ActionReducerMap, createFeatureSelector, createSelector } from "@ngrx/store";

// Reducers
import * as EmployeeReducer from "./employee/employee.reducer";


export interface AppState {
    Employee: EmployeeReducer.EmployeeState
}

export const appReducer: ActionReducerMap<AppState> = {
    Employee: EmployeeReducer.EmployeeReducer
}


// Employee Selectors
export const getEmployeeState = createFeatureSelector("Employee")

export const getEmployeeList = createSelector(getEmployeeState, (state: EmployeeReducer.EmployeeState) => state.EmployeeList)