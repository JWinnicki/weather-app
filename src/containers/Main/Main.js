import React from 'react';
import {connect} from 'react-redux';

import styles from './Main.module.scss';
import SearchBar from '../../components/SearchBar/SearchBar';
import ForecastContainer from '../../components/ForecastContainer/ForecastContainer';

const Main = ({forecastArr, latestForecast, errorMsg}) => {
    const shouldAnimate = () => errorMsg || latestForecast.name;
    return (
        <div className={styles.Main}>
            <SearchBar/>
            {shouldAnimate() && 
            <ForecastContainer 
                forecastArr={forecastArr} 
                latestForecast={latestForecast}
                errorMsg={errorMsg}
            />}
        </div>
    );
}

const mapStateToProps = ({historyForecats, latestForecast, errorMsg}) => {
    return {
        forecastArr: historyForecats,
        latestForecast,
        errorMsg
    }
}

export default connect(mapStateToProps)(Main);