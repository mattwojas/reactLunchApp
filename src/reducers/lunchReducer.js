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
                    name: action.value1,
                    rating: action.value2,
                    meals: []
                }
            ]
        case types.ADD_MEAL:
            // destructure the array
            const headState = state.slice(0, action.index);
            const modItem = state[action.index];
            const tailState = state.slice(action.index + 1);
            // modify item in quesiton 
            modItem.meals.push({"name": action.value});           
            // assemble complete data
            const finalArray = headState.concat(modItem, tailState)
            //return state;
            return finalArray;
        case types.DELETE_MEAL:
            console.log('pIndex',action.parentIndex);
            console.log('indx',action.index);            
        default:
            return state;
    }    
}