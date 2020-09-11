import React, {useState, useEffect, useRef} from 'react';

import styles from './TitleControls.module.scss';
import SVGBackground from '../SVGBackground/SVGBackground';
import MenuButton from '../MenuButton/MenuButton';
import menuIcon from '../../assets/menuArrow.svg';
import AnimatedTitle from '../AnimatedTitle/AnimatedTitle';

const TitleControls = ({forecastArr, currentForecast, decreaseCounter, increaseCounter, arrIndex}) => {

    const [shouldAnimate, setShouldAnimate] = useState(false);
    const [animationRange, setAnimationRange] = useState('0');
    const [displayButtons, setDisplayButtons] = useState('none');
    const headerContainer = useRef(null);
    const headerText = useRef(null);


    const checkIfFit = () => {
        setShouldAnimate(false);
        //console.log(headerText.current.offsetWidth);
        if(headerContainer.current && headerText.current && headerContainer.current.offsetWidth < headerText.current.offsetWidth) {
            //console.log(headerContainer.current.offsetWidth < headerText.current.offsetWidth); //// Jesli ten warunek jest prawdziwy, animacja ma dzialac
            //console.log(headerText.current.offsetWidth - headerContainer.current.offsetWidth);
            const range = (headerText.current.offsetWidth - headerContainer.current.offsetWidth + 10) / 2;
            setAnimationRange(`${range}px`);
            setShouldAnimate(true);
        } else {
            setAnimationRange(`0`);
            setShouldAnimate(false);
        }
    }

    const renderTitle = () => {
        if(shouldAnimate) {
            //console.log(animationRange);
            console.log('animate');
            return <AnimatedTitle ref={headerText} animationRange={animationRange}>{forecastArr[arrIndex].name}</AnimatedTitle>
        } else {
            //console.log(animationRange);
            console.log('dont animate');
            return <h1 className={styles.TitleControlsHeaderText} ref={headerText}>{forecastArr[arrIndex].name}</h1>
        }
    }

    useEffect(() => {
        if(forecastArr.length > 1) {
            setDisplayButtons('grid');
        }
    }, [forecastArr]);

    useEffect(() => {
        checkIfFit();
        return () => {};
    }, [currentForecast, arrIndex]); //Dopisac warunek zeby sie odswiezalo przy zmianie rozdzielczosci

    const increaseHandler = () => {
        increaseCounter();
    }

    const decreaseHandler = () => {
        decreaseCounter();
    }

    return (         
        <div className={styles.TitleControls}>
            <MenuButton onClick={decreaseHandler} style={{display: displayButtons, borderTopLeftRadius: '10px'}}>
                <SVGBackground icon={menuIcon} rotate='90'/>
            </MenuButton>
            <MenuButton onClick={increaseHandler} style={{display: displayButtons, borderTopRightRadius: '10px'}}>
                <SVGBackground icon={menuIcon} rotate='270'/>
            </MenuButton>
            <div className={styles.TitleControlsHeader} ref={headerContainer}>
                {renderTitle()}
            </div>
        </div>
    );
};

export default TitleControls;

