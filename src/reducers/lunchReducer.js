import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function lunchReducer(state = initialState.lunches, action) {
    // console.log('action.type', action.type)
    switch (action.type) {
        case types.LOAD_LUNCHES_SUCCESS:
            // console.log(action.lunches)        
            return action.lunches;
        case types.SHUFFLE_LUNCHES:
            // console.log('shuffling at the reducer:::', action.lunches);
            // console.log('state of reducer', state);
            let array = action.lunches;
            let m = array.length, t, i;
            while (m) {
                // pic remaining el
                i = Math.floor(Math.random() * m--);
        
                // swap with current el
                t = array[m];
                array[m] = array[i];
                array[i] = t;
            }
            
            return [...state];            
        default:
            return state;
    }    
}