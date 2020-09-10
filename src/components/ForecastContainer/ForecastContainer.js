import React, {useState, useEffect} from 'react';

import styles from './ForecastContainer.module.scss';
import SVGBackground from '../SVGBackground/SVGBackground';
import windIcon from '../../assets/windArrow.svg';
import TitleControls from '../TitleControls/TitleControls';

const ForecastContainer = ({forecastArr, currentForecast, mainContainer}) => {

    const [index, setIndex] = useState(0);
    //console.log(mainContainer.current.offsetWidth);

    useEffect(() => {
        setIndex(0);
    }, [currentForecast]);

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
            {/* <div className={styles.GreyBarTop}/> */}
            <TitleControls 
                forecastArr={forecastArr}
                currentForecast={currentForecast}
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
                        <div style={{width: '4rem', height: '4rem'}}>
                            <SVGBackground icon={windIcon} rotate={forecastArr[index].wind.deg}/>
                        </div>
                    </li>
                </ul>
            </div>
            {/* <div className={styles.GreyBarBot}/> */}
        </div>
    );
}

export default ForecastContainer;