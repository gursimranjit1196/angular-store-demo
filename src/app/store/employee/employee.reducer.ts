import { EmployeeAction } from "./employee.actions";

import { EMPLOYEE_ACTIONS } from "../../constants/store";
import { EMPLOYEES_LIST } from "../../constants/employee-list";

export interface EmployeeState {
  EmployeeList: object
  Loading: boolean
}

const initialState = {
  EmployeeList: EMPLOYEES_LIST,
  Loading: false
}

export function EmployeeReducer(state = initialState, action: EmployeeAction) {

  switch (action.type) {
    case EMPLOYEE_ACTIONS.ADD:
      let id = Object.keys(state.EmployeeList || {}).length + 1
      return {
        ...state,
        EmployeeList: {
          ...state.EmployeeList, 
          [id.toString()]: { ...action["payload"], id }
        }
      }

    case EMPLOYEE_ACTIONS.EDIT:
      if (state && state.EmployeeList && state.EmployeeList[action.payload.id]) {
        return {
          ...state,
          EmployeeList: {
            ...state.EmployeeList,
            [action.payload.id.toString()]: { ...action["payload"]["employee"], id: action.payload.id }
          }
        }
      } else {
        state
      }
  
    default:
      return state
  }
  
}