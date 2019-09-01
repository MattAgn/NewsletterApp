import React, { ReactElement } from 'react';
import { render } from 'react-native-testing-library';
import { Provider } from 'react-redux';

import { Toaster } from '../components/Toaster';
import { createStore, applyMiddleware } from 'redux';
import { rootReducer } from '../complex-version/modules/reducer';
import watchAll from '../complex-version/modules/saga';
import createSagaMiddleware from 'redux-saga';

const sagaMiddleware = createSagaMiddleware();

export const renderPage = (page: ReactElement) => {
  const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));
  sagaMiddleware.run(watchAll);

  return render(
    <Provider store={store}>
      {page}
      <Toaster />
    </Provider>
  );
};
