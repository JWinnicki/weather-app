import React, {useState, useEffect} from 'react';

import styles from './ForecastContainer.module.scss';
import SVGBackground from '../SVGBackground/SVGBackground';
import windIcon from '../../assets/windArrow.svg';
import TitleControls from '../TitleControls/TitleControls';

const ForecastContainer = ({forecastArr, latestForecast, mainContainer}) => {

    const [index, setIndex] = useState(0);
    //console.log(mainContainer.current.offsetWidth);

    useEffect(() => {
        setIndex(0);
    }, [latestForecast]);

    const increaseCounter = () => {
        if(index > 0) {
            setIndex(prev => prev - 1)
        }
    }

    const decreaseCounter = () => {
        if(index < forecastArr.length - 1) {
            setIndex(prev => prev + 1)
        }
    }

    return (
        <div className={styles.ForecastContainer}>
            <TitleControls 
                forecastArr={forecastArr}
                latestForecast={latestForecast}
                decreaseCounter={decreaseCounter}
                increaseCounter={increaseCounter}
                arrIndex={index}
            />
            <div className={styles.ForecastContainerDescription}>
                <h2 className={styles.ForecastContainerDescriptionText}>{forecastArr[index].weather[0].description}</h2>
            </div>
            <div className={styles.ForecastContainerContent}>
                <ul className={styles.ForecastContainerList}>
                    <li className={styles.ForecastContainerListItem}>
                        <p className={styles.ForecastContainerListItemText}>Temperature: {Math.ceil(forecastArr[index].main.temp)} <sup>o</sup>C</p>
                    </li>
                    <li className={styles.ForecastContainerListItem}>
                        <p className={styles.ForecastContainerListItemText}>Pressure: {forecastArr[index].main.pressure} hPa</p>
                    </li>
                    <li className={styles.ForecastContainerListItem}>
                        <p className={styles.ForecastContainerListItemText}>Humidity: {forecastArr[index].main.humidity} %</p>
                    </li>
                    <li className={styles.ForecastContainerListItem}>
                        <p className={styles.ForecastContainerListItemText}>Wind Speed: {forecastArr[index].wind.speed} m/s</p>
                    </li>
                    <li className={styles.ForecastContainerListItem}>
                        <p className={styles.ForecastContainerListItemText}>Wind Direction:</p>
                        <div className={styles.ForecastContainerListItemIcon}>
                            <SVGBackground icon={windIcon} rotate={forecastArr[index].wind.deg}/>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default ForecastContainer;