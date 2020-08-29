import React, {useState, useEffect, useRef} from 'react';

import styles from './ForecastContainer.module.scss';
import SVGBackground from '../SVGBackground/SVGBackground';
import MenuButton from '../MenuButton/MenuButton';
import menuIcon from '../../assets/menuArrow.svg';
import windIcon from '../../assets/windArrow.svg';

const ForecastContainer = ({forecastArr, currentForecast}) => {

    const [index, setIndex] = useState(0);
    const headerContainer = useRef(null);
    const headerText = useRef(null);

    useEffect(() => {
        if(headerContainer.current && headerText.current) {
            console.log(headerContainer.current.offsetWidth < headerText.current.offsetWidth); //// Jesli ten warunek jest prawdziwy, animacja ma dzialac
        }
    }, [currentForecast])

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
            <div className={styles.ForecastContainerControls}>
                <MenuButton onClick={decreaseCounter}>
                    <SVGBackground icon={menuIcon} rotate='90'/>
                </MenuButton>
                <div className={styles.ForecastContainerHeader} ref={headerContainer} id='random'>
                    <h1 className={styles.ForecastContainerHeaderText} ref={headerText}>{forecastArr[index].name}</h1>
                </div>
                <MenuButton onClick={increaseCounter}>
                    <SVGBackground icon={menuIcon} rotate='270'/>
                </MenuButton>
            </div>
            <div className={styles.ForecastContainerDescription}>
                <h2 className={styles.ForecastContainerDescriptionText}>{forecastArr[index].weather[0].description}</h2>
            </div>
            <div className={styles.ForecastContainerContent}>
                <ul className={styles.ForecastContainerList}>
                    <li className={styles.ForecastContainerListItem}>
                        <p className={styles.ForecastContainerListItemText}>Temperature: {forecastArr[index].main.temp}</p>
                    </li>
                    <li className={styles.ForecastContainerListItem}>
                        <p className={styles.ForecastContainerListItemText}>Pressure: {forecastArr[index].main.pressure}</p>
                    </li>
                    <li className={styles.ForecastContainerListItem}>
                        <p className={styles.ForecastContainerListItemText}>Humidity: {forecastArr[index].main.humidity}%</p>
                    </li>
                    <li className={styles.ForecastContainerListItem}>
                        <p className={styles.ForecastContainerListItemText}>Wind Speed: {forecastArr[index].wind.speed}m/s</p>
                    </li>
                    <li className={styles.ForecastContainerListItem}>
                        <p className={styles.ForecastContainerListItemText}>Wind Direction:</p>
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