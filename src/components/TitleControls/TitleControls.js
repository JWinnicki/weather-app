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
        if(headerContainer.current && headerText.current && headerContainer.current.offsetWidth < headerText.current.offsetWidth) {
            //console.log(headerContainer.current.offsetWidth < headerText.current.offsetWidth); //// Jesli ten warunek jest prawdziwy, animacja ma dzialac
            //console.log(headerText.current.offsetWidth - headerContainer.current.offsetWidth);
            const range = (headerText.current.offsetWidth - headerContainer.current.offsetWidth + 10) / 2;
            setShouldAnimate(true);
            setAnimationRange(`${range}px`);
        } else {
            setShouldAnimate(false);
            setAnimationRange(`0`);
        }
    }

    const renderTitle = () => {
        if(shouldAnimate) {
            return <AnimatedTitle ref={headerText} animationRange={animationRange}>{forecastArr[arrIndex].name}</AnimatedTitle>
        } else {
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
    }, [currentForecast, arrIndex]) //Dopisac warunek zeby sie odswiezalo przy zmianie rozdzielczosci

    return (         
        <div className={styles.TitleControls}>
            <MenuButton onClick={decreaseCounter} style={{display: displayButtons, borderTopLeftRadius: '10px'}}>
                <SVGBackground icon={menuIcon} rotate='90'/>
            </MenuButton>
            <MenuButton onClick={increaseCounter} style={{display: displayButtons, borderTopRightRadius: '10px'}}>
                <SVGBackground icon={menuIcon} rotate='270'/>
            </MenuButton>
            <div className={styles.TitleControlsHeader} ref={headerContainer}>
                {renderTitle()}
            </div>
        </div>
    );
}

export default TitleControls;

