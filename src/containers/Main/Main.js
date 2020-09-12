import React, {useRef} from 'react';
import {connect} from 'react-redux';

import styles from './Main.module.scss';
import SearchBar from '../../components/SearchBar/SearchBar';
import ForecastContainer from '../../components/ForecastContainer/ForecastContainer';
import { setIndex, setRange, setShouldAnimate } from '../../store/actions/forecast';

const Main = ({forecastArr, latestForecast, onSetIndex, currentIndex, range, shouldAnimate, onSetRange, onSetShouldAnimate}) => {
    const mainContainer = useRef({});
    return (
        <div className={styles.Main} ref={mainContainer}>
            <SearchBar/>
            {latestForecast.name && 
            <ForecastContainer 
                range={range} 
                shouldAnimate={shouldAnimate} 
                setIndex={onSetIndex} 
                index={currentIndex} 
                forecastArr={forecastArr} 
                latestForecast={latestForecast} 
                mainContainer={mainContainer}
                setRange={onSetRange}
                setShouldAnimate={onSetShouldAnimate}
            />}
        </div>
    );
}

const mapStateToProps = ({historyForecats, latestForecast, currentIndex, shouldAnimate, range}) => {
    return {
        forecastArr: historyForecats,
        latestForecast,
        currentIndex,
        range,
        shouldAnimate
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onSetIndex: index => dispatch(setIndex(index)),
        onSetShouldAnimate: bool => dispatch(setShouldAnimate(bool)),
        onSetRange: range => dispatch(setRange(range))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Main);