import * as actionTypes from '../actions/actionTypes';

const initialState = {
    error: false,
    errorMsg: '',
    isLoading: false,
    isTouched: false,
    city: '',
    latestForecast: {},
    historyForecats: [],
    shouldAnimate: false,
    range: 0,
    currentIndex: 1
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
                currentIndex: 0
            }
        case actionTypes.SET_INDEX:
            return {
                ...state,
                currentIndex: action.currentIndex
            }
        case actionTypes.SET_RANGE:
            return {
                ...state,
                range: action.range
            }
        case actionTypes.SET_SHOULD_ANIMATE:
            return {
                ...state,
                shouldAnimate: action.shouldAnimate
            }
        default: 
            return state
    }
    
};