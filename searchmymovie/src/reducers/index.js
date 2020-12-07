import { combineReducers } from 'redux';
import errorReducer from './errorReducers';
import authReducer from './authReducer'
export default combineReducers({
    errors: errorReducer,
    auth:authReducer

});
