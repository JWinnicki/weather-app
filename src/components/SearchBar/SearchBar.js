import React, {useState, useEffect} from 'react';
import {connect} from 'react-redux';


import styles from './SearchBar.module.scss';
import SearchInput from '../SearchInput/SearchInput';
import SearchButton from '../SearchButton/SearchButton';
import {search} from '../../store/actions/forecast';
import SVGBackground from '../SVGBackground/SVGBackground'
import Spinner from '../Spinner/Spinner';
import icon from '../../assets/magnifier.svg';

const SearchBar = ({onSubmitHandler, isTouched, isLoading, currentForecast}) => {
    const [text, setText] = useState('');

    useEffect(() => {
        setText('');
    }, [currentForecast])

    return (
        <div className={isTouched ? styles.SearchBarTouched : styles.SearchBar}>
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

const mapStateToProps = ({isTouched, isLoading, currentForecast}) => {
    return {
        isTouched: isTouched,
        isLoading: isLoading,
        currentForecast: currentForecast
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onSubmitHandler: city => dispatch(search(city))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);