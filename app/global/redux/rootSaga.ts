import {SagaMiddleware} from 'redux-saga';
import {all} from 'redux-saga/effects';
import {filterSaga, leaveSaga, settingsSaga} from './sagas';

function* rootSaga() {
  yield all([settingsSaga(), leaveSaga(), filterSaga()]);
}

export const registerSagas = (sagaMiddleware: SagaMiddleware) => {
  sagaMiddleware.run(rootSaga);
};
