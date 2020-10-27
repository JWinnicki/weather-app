import React, {useState, useEffect} from 'react';
import {connect} from 'react-redux';


import styles from './SearchBar.module.scss';
import SearchInput from '../SearchInput/SearchInput';
import SearchButton from '../SearchButton/SearchButton';
import {search} from '../../store/actions/forecast';
import SVGBackground from '../SVGBackground/SVGBackground'
import Spinner from '../Spinner/Spinner';
import icon from '../../assets/magnifier.svg';

const SearchBar = ({onSubmitHandler, isTouched, isLoading, latestForecast}) => {
    const [text, setText] = useState('');
    const [shouldAnimationTrigger, setShouldAnimationTrigger] = useState(true);

    useEffect(() => {
        setText('');
    }, [latestForecast])

    useEffect(() => {
        if(isTouched) {
            setTimeout(() => {
                setShouldAnimationTrigger(false);
            }, 1000);
        }

        return () => {};
    }, [isTouched])

    const selectClassName = () => {
        if(!isTouched) {
            return styles.SearchBar;
        } else if(isTouched && shouldAnimationTrigger) {
            return styles.SearchBarTouched;
        } else {
            return styles.SearchBarNoAnimation; 
        }
    }

    return (
        <div className={selectClassName()}>
            <div className={styles.SearchBarInputContainer}>
                <SearchInput
                    type='text'
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    placeholder='City name'
                />
            </div>
            <div className={styles.SearchBarButtonContainer}>
                <SearchButton 
                    type='button' 
                    onClick={() => onSubmitHandler(text)}
                    text={text}
                >
                    {isLoading ? <Spinner /> : <SVGBackground icon={icon} />}
                </SearchButton>
            </div>
        </div>
    );
}

const mapStateToProps = ({isTouched, isLoading, latestForecast}) => {
    return {
        isTouched: isTouched,
        isLoading: isLoading,
        latestForecast: latestForecast
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onSubmitHandler: city => dispatch(search(city))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);