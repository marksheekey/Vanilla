import {applyMiddleware, compose, createStore} from 'redux';
import {createLogger} from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import {rootReducer} from '../rootReducer';
import {registerSagas} from '../rootSaga';

export const configureStore = () => {
  const sagaMiddleware = createSagaMiddleware();
  const middleware = [sagaMiddleware];

  if (__DEV__) {
    const createDebugger = require('redux-flipper').default;
    // @ts-ignore
    middleware.push(createLogger({}), createDebugger());
  }

  const store = createStore(
    rootReducer,
    undefined,
    compose(applyMiddleware(...middleware))
  );

  registerSagas(sagaMiddleware);

  return { store };
};
