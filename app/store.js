import { applyMiddleware , createStore } from 'redux';
import rootReducers from './reducers';
import {createLogger} from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import mySagas from './sagas';

const sagaMiddleware = createSagaMiddleware();
const middleware = applyMiddleware(sagaMiddleware,createLogger());
const store = createStore(rootReducers,middleware);

sagaMiddleware.run(mySagas);

export default store;
