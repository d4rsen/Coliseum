import {all} from 'redux-saga/effects'
import mannequinSagaWatcher from './mannequinSaga'

export function* rootSaga() {
    yield all([
        mannequinSagaWatcher(),
    ])
}