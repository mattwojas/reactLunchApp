import {combineReducers} from 'redux';
import lunches from './lunchReducer';

const rootReducer = combineReducers({
    lunches
})

export default rootReducer;