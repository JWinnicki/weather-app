import React from 'react';

import styles from './Logo.module.scss';
import SVGBackground from '../SVGBackground/SVGBackground';
import iconSun from '../../assets/sun.svg';
import iconCloud from '../../assets/cloud.svg';

const Logo = () => {
    return(
        <div className={styles.Logo}>
            <div className={styles.LogoIconContainer}>
                <SVGBackground icon={iconSun}/>
            </div>
            <p className={styles.LogoText}>WEATHER</p>
            <p className={styles.LogoText}>APP</p>
            <div className={styles.LogoIconContainer}>
                <SVGBackground icon={iconCloud}/>
            </div>
        </div>
    );
}

export default Logo;