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
                console.log(error.response.data.message);
            }
        }
    }
}

export const setIndex = index => {
    return {
        type: actionTypes.SET_INDEX,
        currentIndex: index
    }
}

export const setRange = range => {
    return {
        type: actionTypes.SET_RANGE,
        range: range
    }
}

export const setShouldAnimate = bool => {
    return {
        type: actionTypes.SET_SHOULD_ANIMATE,
        shouldAnimate: bool
    }
}