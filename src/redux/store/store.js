import {applyMiddleware, createStore} from 'redux'
import {composeWithDevTools} from 'redux-devtools-extension'
import createSagaMiddleware from 'redux-saga'
import thunk from 'redux-thunk'
import initialState from '../init/initialState'
import {rootReducer} from '../reducers/rootReducer/rootReducer'
import rootSaga from "../actions/sagas/rootSaga";

const sagaMiddleware = createSagaMiddleware()

const store = createStore(rootReducer, initialState(), composeWithDevTools(applyMiddleware(thunk, sagaMiddleware)))
sagaMiddleware.run(rootSaga)
export default store
