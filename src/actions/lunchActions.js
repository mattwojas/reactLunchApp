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
    return {type: types.LOAD_LUNCHES_SUCCESS, lunches};
}
