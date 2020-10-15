import React, {useRef} from 'react';
import {connect} from 'react-redux';

import styles from './Main.module.scss';
import SearchBar from '../../components/SearchBar/SearchBar';
import ForecastContainer from '../../components/ForecastContainer/ForecastContainer';

const Main = ({forecastArr, latestForecast, errorMsg}) => {
    const mainContainer = useRef({});
    return (
        <div className={styles.Main} ref={mainContainer}>
            <SearchBar/>
            {latestForecast.name && 
            <ForecastContainer 
                forecastArr={forecastArr} 
                latestForecast={latestForecast} 
                mainContainer={mainContainer}
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