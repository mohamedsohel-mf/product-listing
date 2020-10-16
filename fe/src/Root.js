import React from 'react';
import { Provider } from 'react-redux';
import PropTypes from 'prop-types';
import {ConfigureStore} from './redux/store/ConfigureStore';

const store = ConfigureStore();

const Root = ({ children }) => (
  <Provider store={store}>
    {children}
  </Provider>
);

Root.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  children: PropTypes.object.isRequired,
};

export default Root;
