import axios from '../../axios-weather';
import key from '../../api-key';
import * as actionTypes from './actionTypes';

export const searchStart = city => {
    return {
        type: actionTypes.SEARCH_START,
        city: city
    }
}

export const searchFail = errorMsg => {
    return {
        type: actionTypes.SEARCH_FAIL,
        errorMsg: errorMsg
    }
}

export const searchSuccess = forecast => {
    return {
        type: actionTypes.SEARCH_SUCCESS,
        forecast: forecast
    }
}

export const search = city => {
    return async dispatch => {
        dispatch(searchStart(city));
        try {
            const response = await axios.get(`weather?q=${city}&appid=${key}&units=metric`);
            dispatch(searchSuccess(response.data));
        } catch(error) {
            if(error.response === undefined) {
                dispatch(searchFail(''));
            } else {
                dispatch(searchFail(error.response.data.message));
            }
        }
    }
}