import {
  SET_DRAWER_VISIBILITY_ACTION,
  SET_SELECTED_OPERATOR,
  DELETE_SELECTED_OPERATOR,
  RESET_SELECTED_FILTERS,
} from './actionTypes';
import { globalAppInitialState } from './initialState';
import { AnyAction } from 'redux';

export const appReducer = (
  state = globalAppInitialState,
  { type, payload }: AnyAction
) => {
  switch (type) {
    // Set Filter Drawer Action
    case SET_DRAWER_VISIBILITY_ACTION: {
      return {
        ...state,
        drawerVisibility: payload.drawerVisibility,
      };
    }

    // Set Filter Operators Action
    case SET_SELECTED_OPERATOR: {
      return {
        ...state,
        selectedOperators: [...state.selectedOperators, payload],
      };
    }

    // Delete option from Filter Operators Action
    case DELETE_SELECTED_OPERATOR: {
      return {
        ...state,
        selectedOperators: payload.selectedOperators,
      };
    }

    // Reset Filter
    case RESET_SELECTED_FILTERS: {
      return {
        ...state,
        selectedOperators: payload.selectedOperators,
      };
    }

    default:
      return state;
  }
};
