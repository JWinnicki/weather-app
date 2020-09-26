import React, {useState, useEffect} from 'react';

import styles from './ForecastContainer.module.scss';
import SVGBackground from '../SVGBackground/SVGBackground';
import windIcon from '../../assets/windArrow.svg';
import TitleControls from '../TitleControls/TitleControls';
import ForecastIconContainer from '../ForecastIconContainer/ForecastIconContainer';
import Toggler from '../Toggler/Toggler';

const ForecastContainer = ({forecastArr, latestForecast, mainContainer}) => {

    const [index, setIndex] = useState(0);
    const [view, setView] = useState('General');
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

    const renderContent = () => {
        if(view === 'General') {
            return (
                <>
                    <div className={styles.ForecastContainerContentIcon}>
                        <ForecastIconContainer 
                            code={forecastArr[index].weather[0].icon}
                        />
                    </div>
                    <p className={styles.ForecastContainerContentTemp}>{Math.ceil(forecastArr[index].main.temp)} °C</p>
                </>
            );
        } else {
            return (
                <ul className={styles.ForecastContainerList}>
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
            );
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
                <div className={styles.ForecastContainerContentToggler}>
                    <Toggler 
                        options={['General', 'Details']}
                        click={setView}
                        currentValue={view}
                    />
                </div>
                {renderContent()}
            </div>
        </div>
    );
}

export default ForecastContainer;