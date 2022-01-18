import { all } from 'redux-saga/effects'
import mannequinSagaWatcher from './mannequinSaga'

export default function* rootSaga() {
    // yield fork(mannequinSagaWatcher)
// }

    yield all([
        mannequinSagaWatcher(),
    ])
}