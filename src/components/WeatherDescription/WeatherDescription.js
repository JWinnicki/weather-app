import React, {useRef, useEffect, useState} from 'react';

import styles from './WeatherDescription.module.scss';
import AnimatedDescription from '../AnimatedDescription/AnimatedDescription';

const WeatherDescription = ({description}) => {
    const [shouldAnimate, setShouldAnimate] = useState(false);
    const [animationRange, setAnimationRange] = useState(0);
    const descriptionContainer = useRef(null);
    const descriptionText = useRef(null);

    const checkIfFit = () => {
        setShouldAnimate(false);
        if(descriptionContainer.current && descriptionText.current && descriptionContainer.current.offsetWidth < descriptionText.current.offsetWidth) {
            const range = (descriptionText.current.offsetWidth - descriptionContainer.current.offsetWidth + 10) / 2;
            setAnimationRange(range);
            setShouldAnimate(true);
        } else {
            setAnimationRange(0);
            setShouldAnimate(false);
        }
    }

    const renderDescription = () => {
        if(shouldAnimate) {
            return <AnimatedDescription ref={descriptionText} animationRange={`${animationRange}px`}>{description}</AnimatedDescription>
        } else {
            return <h2 ref={descriptionText} className={styles.WeatherDescriptionText}>{description}</h2>
        }
    }

    useEffect(() => {
        checkIfFit();
        return () => {};
    }, [description]);

    return(
        <div className={styles.WeatherDescription} ref={descriptionContainer}>
            {renderDescription()}
        </div>
    );
}

export default WeatherDescription;