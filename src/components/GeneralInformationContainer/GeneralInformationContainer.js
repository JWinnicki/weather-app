import React from 'react';

import styles from './GeneralInformationContainer.module.scss';
import ForecastIconContainer from '../ForecastIconContainer/ForecastIconContainer';

const GeneralInformationContainer = ({iconCode, temperature}) => {
    return (
        <>
            <div className={styles.GeneralContainerIcon}>
                <ForecastIconContainer 
                    code={iconCode}
                />
            </div>
            <p className={styles.GeneralContainerText}>{Math.ceil(temperature)} °C</p>
        </>
    );
}

export default GeneralInformationContainer;