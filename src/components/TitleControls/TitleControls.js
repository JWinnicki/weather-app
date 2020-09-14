import React, {useState, useEffect, useRef} from 'react';

import styles from './TitleControls.module.scss';
import SVGBackground from '../SVGBackground/SVGBackground';
import MenuButton from '../MenuButton/MenuButton';
import menuIcon from '../../assets/menuArrow.svg';
import AnimatedTitle from '../AnimatedTitle/AnimatedTitle';

const TitleControls = ({forecastArr, latestForecast, decreaseCounter, increaseCounter, arrIndex}) => {

    const [shouldAnimate, setShouldAnimate] = useState(false);
    const [animationRange, setAnimationRange] = useState(0);
    const headerContainer = useRef(null);
    const headerText = useRef(null);

    const checkIfFit = () => {
        setShouldAnimate(false);
        if(headerContainer.current && headerText.current && headerContainer.current.offsetWidth < headerText.current.offsetWidth) {
            const range = (headerText.current.offsetWidth - headerContainer.current.offsetWidth + 10) / 2;
            setAnimationRange(range);
            setShouldAnimate(true);
        } else {
            setAnimationRange(0);
            setShouldAnimate(false);
        }
    }

    const renderTitle = () => {
        if(shouldAnimate) {
            return <AnimatedTitle ref={headerText} animationRange={`${animationRange}px`}>{forecastArr[arrIndex].name}</AnimatedTitle>
        } else {
            return <h1 className={styles.TitleControlsHeaderText} ref={headerText}>{forecastArr[arrIndex].name}</h1>
        }
    }

    useEffect(() => {
        checkIfFit();
        return () => {};
    }, [arrIndex, latestForecast]); //Dopisac warunek zeby sie odswiezalo przy zmianie rozdzielczosci

    const increaseHandler = () => {
        increaseCounter();
    }

    const decreaseHandler = () => {
        decreaseCounter();
    }

    return (         
        <div className={styles.TitleControls}>
            <MenuButton onClick={decreaseHandler} style={{borderTopLeftRadius: '10px'}}>
                <SVGBackground icon={menuIcon} rotate='90'/>
            </MenuButton>
            <MenuButton onClick={increaseHandler} style={{borderTopRightRadius: '10px'}}>
                <SVGBackground icon={menuIcon} rotate='270'/>
            </MenuButton>
            <div className={styles.TitleControlsHeader} ref={headerContainer}>
                {renderTitle()}
            </div>
        </div>
    );
};

export default TitleControls;

