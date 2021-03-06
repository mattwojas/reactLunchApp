import * as types from './actionTypes';
import lunchApi from '../api/lunchApi';

export function loadLunches() {
    return (dispatch) => {
        return lunchApi.getAllLunches().then(lunches => {
            dispatch(loadLunchesSuccess(lunches));
        }).catch(error => {
            throw(error);
        });
    };
}

export function loadLunchesSuccess(lunches) {
    // console.log('load lunches success getting called');
    return {type: types.LOAD_LUNCHES_SUCCESS, lunches};
}

export function shuffleLunches(lunches) {
    // console.log('shuffling in actions', lunches);
    return {type: types.SHUFFLE_LUNCHES, lunches};
}

export function deleteItem( index) {
    console.log('item to del', index);
    // console.log('lunches to del', lunches);
    return {type: types.DELETE_LUNCH, index}
}

export function addItem(value1, value2){
    console.log('adding', value1, value2);
    return {type: types.ADD_LUNCH, value1, value2};
}

export function addMealItem(index, value){
    console.log('adding meal');
    return {type:types.ADD_MEAL, index, value};
}

export function deleteMealItem(parentIndex, index){
    console.log('parentIndex', parentIndex);
    console.log('Index', index);
    return {type: types.DELETE_MEAL, parentIndex, index}
}