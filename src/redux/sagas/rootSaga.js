import { all } from 'redux-saga/effects'
import mannequinSagaWatcher from './mannequinSaga'

export default function* rootSaga() {
    yield all([
        mannequinSagaWatcher(),
    ])
}