import React, {useState, useEffect} from 'react';

import SVGBackground from '../SVGBackground/SVGBackground';
import sunIcon from '../../assets/sun.svg';
import cloudsIcon from '../../assets/clouds.svg';
import sunWithCloudsIcon from '../../assets/cloudy-day.svg';
import fogIcon from '../../assets/fog.svg';
import rainIcon from '../../assets/rainy.svg';
import snowIcon from '../../assets/snow.svg';
import thunderIcon from '../../assets/thunder.svg';

const ForecastIconContainer = ({code}) => {

    const [icon, setIcon] = useState(null);

    useEffect(() => {
        const newCode = Number(code.slice(0,2));
        if(newCode <= 4) {
            if(newCode === 1) {
                setIcon(sunIcon);
            } else if(newCode === 2) {
                setIcon(sunWithCloudsIcon);
            } else {
                setIcon(cloudsIcon)
            }
        } else if(newCode >= 9 && newCode <= 11) {
            if(newCode === 11) {
                setIcon(thunderIcon);
            } else {
                setIcon(rainIcon);
            }
        } else {
            if(newCode === 13) {
                setIcon(snowIcon);
            } else {
                setIcon(fogIcon);
            }
        }
    }, [code])
    
    return (
        <SVGBackground icon={icon}/>
    );
}

export default ForecastIconContainer;