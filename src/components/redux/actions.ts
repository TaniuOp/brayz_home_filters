import { ISelectedOperatorsModel } from '../DashboardFilter/BrayzFilter.types';
import {
  SET_SELECTED_OPERATOR,
  SET_DRAWER_VISIBILITY_ACTION,
  DELETE_SELECTED_OPERATOR,
  RESET_SELECTED_FILTERS,
} from './actionTypes';

export const setDrawerVisibility = (drawerVisibility: boolean) => ({
  type: SET_DRAWER_VISIBILITY_ACTION,
  payload: { drawerVisibility },
});

export const setSelectedOperator = (
  operator: ISelectedOperatorsModel | string[]
) => ({
  type: SET_SELECTED_OPERATOR,
  payload: operator,
});

export const deleteSelectedOperator = (
  selectedOperators: ISelectedOperatorsModel[]
) => ({
  type: DELETE_SELECTED_OPERATOR,
  payload: { selectedOperators },
});

export const resetSelectedFilters = (
  selectedOperators: ISelectedOperatorsModel[] | string[]
) => ({
  type: RESET_SELECTED_FILTERS,
  payload: { selectedOperators },
});
