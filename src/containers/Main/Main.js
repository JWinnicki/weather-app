import React from 'react';

import styles from './Main.module.scss';
import SearchBar from '../../components/SearchBar/SearchBar';
import ForecastContainer from '../../components/ForecastContainer/ForecastContainer';

const Main = () => {
    return (
        <div className={styles.Main}>
            <SearchBar />
            <ForecastContainer />
        </div>
    );
}

export default Main;