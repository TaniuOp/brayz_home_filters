import { useSelector } from 'react-redux';
import { ISelectedOperatorsModel } from '../DashboardFilter/BrayzFilter.types';
import { IGlobalAppState } from './types';

export const DashboardSelectors = (state: any) => state.drawerVisibility;
export const useDashboardSelectors = (): boolean =>
  useSelector((state: IGlobalAppState) => DashboardSelectors(state));

export const OperatorFilterSelector = (state: any) => state.selectedOperators;
export const useOperatorFilterSelector = (): ISelectedOperatorsModel[] =>
  useSelector((state: IGlobalAppState) => OperatorFilterSelector(state));
