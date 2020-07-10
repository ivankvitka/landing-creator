import React, { FC } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';

import AppContainer from './components/AppContainer';
import GlobalStyles from './styles';
import { rootReducer } from './store/root.reducer';

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const sagaMiddleware = createSagaMiddleware();

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(sagaMiddleware)));

const App: FC = () => {
  return (
    <Provider store={store}>
      <Router>
        <GlobalStyles />
        <AppContainer />
      </Router>
    </Provider>
  );
};

export default App;
