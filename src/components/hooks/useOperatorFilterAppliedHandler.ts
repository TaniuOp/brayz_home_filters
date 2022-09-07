import { useDispatch } from 'react-redux';
import { useCallback } from 'react';
import { deleteSelectedOperator, setSelectedOperator } from '../redux/actions';
import { useOperatorFilterSelector } from '../redux/selectors';
import { ISelectedOperatorsModel } from '../DashboardFilter/BrayzFilter.types';

// This will handle the filters applied one by one
const useOperatorFilterAppliedHandler = () => {
  const dispatch = useDispatch();

  const selectedOperators = useOperatorFilterSelector();

  const onHandlerOperatorFilterApplied = useCallback(
    (operator: ISelectedOperatorsModel) => {
      if (!selectedOperators?.includes(operator)) {
        dispatch(setSelectedOperator(operator));
      }

      if (selectedOperators?.includes(operator)) {
        const payload = [...selectedOperators];
        const selectedOperatorsUpdated = payload?.filter(
          (element: any) => element !== operator
        );
        dispatch(deleteSelectedOperator(selectedOperatorsUpdated));
      }
    },
    [selectedOperators]
  );

  return { onHandlerOperatorFilterApplied };
};

export default useOperatorFilterAppliedHandler;
