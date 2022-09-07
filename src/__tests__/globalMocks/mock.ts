import { ISelectedOperatorsModel } from '../../components/DashboardFilter/BrayzFilter.types';
import { IGlobalAppState } from '../../components/redux/types';

export const initialState: IGlobalAppState = {
  drawerVisibility: false,
  selectedOperators: [''],
};

export const filterApplied: IGlobalAppState = {
  drawerVisibility: true,
  selectedOperators: ['ALEX'],
};

export const filterSelectedMock: ISelectedOperatorsModel = {
  selectedOperators: 'ALEX',
};
