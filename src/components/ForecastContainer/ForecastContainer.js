import React, {useState, useEffect} from 'react';

import styles from './ForecastContainer.module.scss';
import SVGBackground from '../SVGBackground/SVGBackground';
import MenuButton from '../MenuButton/MenuButton';
import menuIcon from '../../assets/menuArrow.svg';
import windIcon from '../../assets/windArrow.svg';

const ForecastContainer = ({forecastArr, currentForecast}) => {

    const [index, setIndex] = useState(0);

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
            <div className={styles.ForecastContainerHeader}>
                <MenuButton onClick={decreaseCounter}>
                    <SVGBackground icon={menuIcon} rotate='90'/>
                </MenuButton>
                <h1>{forecastArr[index].name}</h1>
                <MenuButton onClick={increaseCounter}>
                    <SVGBackground icon={menuIcon} rotate='270'/>
                </MenuButton>
            </div>
            <div className={styles.ForecastContainerHeader}>
                <h2>{forecastArr[index].weather[0].description}</h2>
            </div>
            <div className={styles.ForecastContainerContent}>
                <ul>
                    <li>
                        <p>Temperature: {forecastArr[index].main.temp}</p>
                    </li>
                    <li>
                        <p>Pressure: {forecastArr[index].main.pressure}</p>
                    </li>
                    <li>
                        <p>Humidity: {forecastArr[index].main.humidity}%</p>
                    </li>
                    <li>
                        <p>Wind Speed: {forecastArr[index].wind.speed}m/s</p>
                    </li>
                    <li>
                        <p>Wind Direction:</p>
                        <div style={{width: '4rem', height: '4rem'}}>
                            <SVGBackground icon={windIcon} rotate={forecastArr[index].wind.deg}/>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default ForecastContainer;