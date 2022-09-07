import { useDispatch } from 'react-redux';
import { setDrawerVisibility } from '../redux/actions';
import { useCallback } from 'react';
import { useDashboardSelectors } from '../redux/selectors';

// This will handle the drawer visibility. It sets the boolean for the <open> property of the Drawer
const useFiltersDrawerVisibilityHandler = () => {
  const dispatch = useDispatch();
  const drawerVisibility = useDashboardSelectors();
  const onHandlerDrawerVisibility = useCallback(
    (drawerVisibility: boolean) => {
      dispatch(setDrawerVisibility(drawerVisibility));
    },
    [drawerVisibility]
  );

  return { onHandlerDrawerVisibility };
};

export default useFiltersDrawerVisibilityHandler;
