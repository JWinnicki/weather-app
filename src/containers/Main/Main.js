import React, {useRef} from 'react';
import {connect} from 'react-redux';

import styles from './Main.module.scss';
import SearchBar from '../../components/SearchBar/SearchBar';
import ForecastContainer from '../../components/ForecastContainer/ForecastContainer';

const Main = ({forecastArr, latestForecast}) => {
    const mainContainer = useRef({});
    return (
        <div className={styles.Main} ref={mainContainer}>
            <SearchBar/>
            {latestForecast.name && 
            <ForecastContainer 
                forecastArr={forecastArr} 
                latestForecast={latestForecast} 
                mainContainer={mainContainer}
            />}
        </div>
    );
}

const mapStateToProps = ({historyForecats, latestForecast, currentIndex, shouldAnimate, range}) => {
    return {
        forecastArr: historyForecats,
        latestForecast
    }
}

export default connect(mapStateToProps)(Main);