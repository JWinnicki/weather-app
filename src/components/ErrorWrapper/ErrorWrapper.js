import React from 'react';

import styles from './ErrorWrapper.module.scss';
import SVGBackground from '../SVGBackground/SVGBackground';
import icon from '../../assets/exclamation-mark.svg'
const ErrorWrapper = ({children}) => {
    return (
        <div className={styles.ErrorWrapper}>
            <div className={styles.ErrorWrapperIcon}>
                <SVGBackground icon={icon}/>
            </div>
            <p className={styles.ErrorWrapperText}>{children}</p>
        </div>
    );
}

export default ErrorWrapper;