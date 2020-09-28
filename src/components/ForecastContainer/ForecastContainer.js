import React, {useState, useEffect} from 'react';

import styles from './ForecastContainer.module.scss';
import TitleControls from '../TitleControls/TitleControls';
import Toggler from '../Toggler/Toggler';
import GeneralInformationContainer from '../GeneralInformationContainer/GeneralInformationContainer';
import DetailsInformationContainer from '../DetailsInformationContainer/DetailsInformationContainer';
import WeatherDescription from '../WeatherDescription/WeatherDescription';

const ForecastContainer = ({forecastArr, latestForecast, mainContainer}) => {

    const [index, setIndex] = useState(0);
    const [view, setView] = useState('General');
    //console.log(mainContainer.current.offsetWidth);

    useEffect(() => {
        setIndex(0);
    }, [latestForecast]);

    const increaseCounter = () => {
        if(index > 0) {
            setIndex(prev => prev - 1)
        }
    }

    const decreaseCounter = () => {
        if(index < forecastArr.length - 1) {
            setIndex(prev => prev + 1)
        }
    }

    const renderContent = () => {
        if(view === 'General') {
            return (
                <GeneralInformationContainer
                    iconCode={forecastArr[index].weather[0].icon}
                    temperature={forecastArr[index].main.temp}
                />
            );
        } else {
            return (
                <DetailsInformationContainer
                    pressure={forecastArr[index].main.pressure}
                    humidity={forecastArr[index].main.humidity}
                    windSpeed={forecastArr[index].wind.speed}
                    windDirection={forecastArr[index].wind.deg}
                />
            );
        }
    }

    return (
        <div className={styles.ForecastContainer}>
            <TitleControls 
                decreaseCounter={decreaseCounter}
                increaseCounter={increaseCounter}
                name={forecastArr[index].name}
            />
            {/* <div className={styles.ForecastContainerDescription}>
                <h2 className={styles.ForecastContainerDescriptionText}>{forecastArr[index].weather[0].description}</h2>
            </div> */}
            <WeatherDescription description={forecastArr[index].weather[0].description}/>
            <div className={styles.ForecastContainerContent}>
                <div className={styles.ForecastContainerContentToggler}>
                    <Toggler 
                        options={['General', 'Details']}
                        click={setView}
                        currentValue={view}
                    />
                </div>
                {renderContent()}
            </div>
        </div>
    );
}

export default ForecastContainer;