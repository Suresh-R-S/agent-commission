import { applyMiddleware , createStore } from 'redux';
import rootReducers from './reducers';
import {createLogger} from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import mySagas from './sagas';

const sagaMiddleware = createSagaMiddleware();
let middleware = '';
if(__DEV__){
  // Development, redux logger enabled
  middleware = applyMiddleware(sagaMiddleware,createLogger());
}
else{
  // Production, redux logger disabled
  middleware = applyMiddleware(sagaMiddleware);
}
const store = createStore(rootReducers,middleware);

sagaMiddleware.run(mySagas);

export default store;
