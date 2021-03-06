/**
 * Created by Angela on 2018/8/4.
 */
import {createStore, applyMiddleware} from 'redux';
import {createLogger} from 'redux-logger';
import reducers from '../reducers/loginReducer';

const store = createStore(reducers, applyMiddleware(createLogger));

export default store;