import { initialSagas } from './transformer';
import { IGlobalAppState } from './types';

export const globalAppInitialState: IGlobalAppState = {
  drawerVisibility: false,
  selectedOperators: initialSagas('OPERATORS'),
  // selectedInstitutions: initialSagas('INSTITUTIONS'),
};
