import {SagaMiddleware} from 'redux-saga';
import {all} from 'redux-saga/effects';
import {settingsSaga} from './sagas';

function* rootSaga() {
  yield all([settingsSaga()]);
}

export const registerSagas = (sagaMiddleware: SagaMiddleware) => {
  sagaMiddleware.run(rootSaga);
};
