import React, {useEffect, useState} from 'react';
import {connect} from 'react-redux';

import styles from './ForecastContainer.module.scss';

const ForecastContainer = ({isLoading, isTouched}) => {

    const [isShown, setIsShown] = useState(false);

    useEffect(() => {
        if(!isLoading && isTouched) {
            setIsShown(true)
        }
    }, [isTouched, isLoading])

    //const isShown = () => !isLoading && isTouched;

    return (
        <div className={isShown ? styles.ForecastContainerShown : styles.ForecastContainer}></div>
    );
}

const mapStateToProps = state => {
    return {
        isLoading: state.isLoading,
        isTouched: state.isTouched
    }
}

export default connect(mapStateToProps)(ForecastContainer);