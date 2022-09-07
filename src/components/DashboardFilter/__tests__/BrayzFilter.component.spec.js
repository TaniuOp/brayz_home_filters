import React from 'react';
import { render } from '@testing-library/react';
import BrayzFilter from '../components/DashboardFilter/BrayzFilter';
import { createStore } from 'react';
import { Provider } from 'react-redux';

describe('Global components tests', () => {
  describe('<BrayzFilter />', () => {
    it('should render the component correctly with default values', () => {
      const store = createStore(() => ({
        globalAppInitialState: {
          drawerVisibility: 'false',
          selectedOperators: [''],
        },
      }));

      const { asFragment } = render(
        <Provider store={store}>
          <BrayzFilter />
        </Provider>
      );

      expect(asFragment()).toMatchSnapshot();
    });
  });
});
