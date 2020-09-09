import React, {useRef} from 'react';
import {connect} from 'react-redux';

import styles from './Main.module.scss';
import SearchBar from '../../components/SearchBar/SearchBar';
import ForecastContainer from '../../components/ForecastContainer/ForecastContainer';

const Main = ({forecastArr, currentForecast}) => {
    const mainContainer = useRef({});
    return (
        <div className={styles.Main} ref={mainContainer}>
            <SearchBar/>
            {currentForecast.name && <ForecastContainer forecastArr={forecastArr} currentForecast={currentForecast} mainContainer={mainContainer} />}
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