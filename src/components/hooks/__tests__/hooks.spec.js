import { renderHook, act } from '@testing-library/react-hooks';
import useOperatorFilterAppliedHandler from '../useOperatorFilterAppliedHandler';
import useFiltersDrawerVisibilityHandler from '../useFiltersDrawerVisibilityHandler';
import { filterApplied } from '../../../../src/__tests__/globalMocks/mock';

describe('Root Hooks', () => {
  describe('useOperatorFilterAppliedHandler()', () => {
    it('should call useOperatorFilterAppliedHandler and return filter applied', () => {
      const store = makeTestStore();
      const wrapper = createWrapper(store);
      const { result } = renderHook(() => useOperatorFilterAppliedHandler(), {
        wrapper,
      });
      act(() => {
        return result.current.useOperatorFilterAppliedHandler({
          selectedOperators: [''],
        });
      });
      expect(store).toMatchSnapshot();
    });
    it('should call useFiltersDrawerVisibilityHandler and return false', () => {
      const store = makeTestStore();
      const wrapper = createWrapper(store);
      const { result } = renderHook(() => useFiltersDrawerVisibilityHandler(), {
        wrapper,
      });
      act(() => {
        return result.current.useFiltersDrawerVisibilityHandler(false);
      });
      expect(store).toMatchSnapshot();
    });
  });
});
