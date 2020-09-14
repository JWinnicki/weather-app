import * as actionTypes from '../actions/actionTypes';

const initialState = {
    error: false,
    errorMsg: '',
    isLoading: false,
    isTouched: false,
    city: '',
    latestForecast: {},
    historyForecats: []
}

export default (state=initialState, action) => {
    switch(action.type) {
        case actionTypes.SEARCH_START:
            return {
                ...state,
                isLoading: true,
                error: false,
                city: action.city
            }
        case actionTypes.SEARCH_FAIL:
            return {
                ...state,
                isLoading: false,
                error: true,
                errorMsg: action.errorMsg,
                currentForecast: {}
            }
        case actionTypes.SEARCH_SUCCESS:
            return {
                ...state,
                isLoading: false,
                isTouched: true,
                latestForecast: action.forecast,
                historyForecats: [action.forecast, ...state.historyForecats],
                error: false,
                errorMsg: ''
            }
        default: 
            return state
    }
    
};