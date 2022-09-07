import React from 'react';
import { render } from '@testing-library/react';
import { createStore } from 'react';
import { Provider } from 'react-redux';
import MainDashboard from '../components/MainDashboard';

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
          <MainDashboard />
        </Provider>
      );

      expect(asFragment()).toMatchSnapshot();
    });
  });
});
