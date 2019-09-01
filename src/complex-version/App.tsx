import React from 'react';
import { Provider } from 'react-redux';

import { store } from './modules/store';
import { Toaster } from '../components/Toaster';
import { Home } from './pages/Home/Home';

export const App = () => (
  <Provider store={store}>
    <Home />
    <Toaster />
  </Provider>
);
