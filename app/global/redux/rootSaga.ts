import {SagaMiddleware} from 'redux-saga';
import {all} from 'redux-saga/effects';
import {settingsSaga} from './sagas';
import {leaveSaga} from './sagas/leave.sagas'

function* rootSaga() {
  yield all([settingsSaga(), leaveSaga()]);
}

export const registerSagas = (sagaMiddleware: SagaMiddleware) => {
  sagaMiddleware.run(rootSaga);
};
