import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function lunchReducer(state = initialState.lunches, action) {
    // console.log('action.type', action.type)
    switch (action.type) {
        case types.LOAD_LUNCHES_SUCCESS:
            return action.lunches;
        case types.SHUFFLE_LUNCHES:
            // Fisher-Yates shuffle
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
        case types.DELETE_LUNCH:
            const newState = state.filter((_, i)=> {
                return i !== action.index;
            });
            return newState;
        case types.ADD_LUNCH:
            return [
                ...state,
                {
                    name: action.value,
                    meals: []
                }
            ]
        default:
            return state;
    }    
}