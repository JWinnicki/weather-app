import React, {useState} from 'react';

import styles from './ForecastContainer.module.scss';

const ForecastContainer = ({forecastArr}) => {

    const [index, setIndex] = useState(0);

    const increaseCounter = () => {
        if(index > 0) {
            setIndex(prevState => prevState - 1);
        }
    }

    const decreaseCounter = () => {
        if(index < forecastArr.length - 1) {
            setIndex(prevState => prevState + 1);
        }
    }

    return (
        <div className={styles.ForecastContainer}>
            <div className={styles.ForecastContainerHeader}>
                <button onClick={decreaseCounter}>prev</button>
                <h1>{forecastArr[index].name}</h1>
                <button onClick={increaseCounter}>next</button>
            </div>
            <div className={styles.ForecastContainerHeader}>
                <h2>{forecastArr[index].weather[0].description}</h2>
            </div>
            <div className={styles.ForecastContainerContent}>

            </div>
        </div>
    );
}

export default ForecastContainer;