import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function lunchReducer(state = initialState.lunches, action) {
    // console.log('action.type', action.type)
    switch (action.type) {
        case types.LOAD_LUNCHES_SUCCESS:
            // console.log(action.lunches)        
            return action.lunches;
        default:
            return state;
    }    
}