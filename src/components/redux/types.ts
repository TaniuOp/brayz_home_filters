import { ISelectedOperatorsModel } from '../DashboardFilter/BrayzFilter.types';

export interface IGlobalAppState {
  drawerVisibility: boolean;
  selectedOperators: ISelectedOperatorsModel[] | string[];
  // selectedInstitutions: ISelectedOperatorsModel[] | string[] | {};
}
