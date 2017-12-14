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