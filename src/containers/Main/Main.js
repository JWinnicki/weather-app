import React from 'react';
import {connect} from 'react-redux';

import styles from './Main.module.scss';
import SearchBar from '../../components/SearchBar/SearchBar';
import ForecastContainer from '../../components/ForecastContainer/ForecastContainer';

const Main = ({forecastArr, currentForecast}) => {
    return (
        <div className={styles.Main}>
            <SearchBar/>
            {currentForecast.name && <ForecastContainer forecastArr={forecastArr} currentForecast={currentForecast} />}
        </div>
    );
}

const mapStateToProps = ({historyForecats, currentForecast}) => {
    return {
        forecastArr: historyForecats,
        currentForecast
    }
}

export default connect(mapStateToProps)(Main);