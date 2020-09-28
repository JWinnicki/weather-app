import React from 'react';

import styles from './DetailsInformationContainer.module.scss';
import windIcon from '../../assets/windArrow.svg';
import SVGBackground from '../SVGBackground/SVGBackground';


const DetailsInformationContainer = ({pressure, humidity, windSpeed, windDirection}) => {
    return (
        <ul className={styles.DetailsContainerList}>
            <li className={styles.DetailsContainerListItem}>
                <p className={styles.DetailsContainerListItemText}>Pressure: {pressure} hPa</p>
            </li>
            <li className={styles.DetailsContainerListItem}>
                <p className={styles.DetailsContainerListItemText}>Humidity: {humidity} %</p>
            </li>
            <li className={styles.DetailsContainerListItem}>
                <p className={styles.DetailsContainerListItemText}>Wind Speed: {windSpeed} m/s</p>
            </li>
            <li className={styles.DetailsContainerListItem}>
                <p className={styles.DetailsContainerListItemText}>Wind Direction:</p>
                <div className={styles.DetailsContainerListItemIcon}>
                    <SVGBackground icon={windIcon} rotate={windDirection}/>
                </div>
            </li>
        </ul>
    );
}

export default DetailsInformationContainer;