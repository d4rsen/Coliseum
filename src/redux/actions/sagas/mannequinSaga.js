import { put, throttle } from 'redux-saga/effects'
import { MANNEQUIN_WAIT_FOR_REGENERATE } from '../../types/playerTypes'
import { ACTION_mannequinRegenerate } from '../mannequinActions'

function* mannequinSagaWorker() {
    yield put(ACTION_mannequinRegenerate())
}

export default function* mannequinSagaWatcher() {
    yield throttle(3000, MANNEQUIN_WAIT_FOR_REGENERATE, mannequinSagaWorker)
}