import React, {useState} from 'react';
import {connect} from 'react-redux';


import styles from './SearchBar.module.scss';
import SearchInput from '../SearchInput/SearchInput';
import SearchButton from '../SearchButton/SearchButton';
import {search} from '../../store/actions/forecast';
import MagnifierBackground from '../MagnifierBackground/MagnifierBackground'
import Spinner from '../Spinner/Spinner';

const SearchBar = ({onSubmitHandler, isTouched, isLoading}) => {
    const [text, setText] = useState('');

    return (
        <div className={isTouched ? styles.SearchBarTouched : styles.SearchBar}>
            <div className={styles.SearchBarInputContainer}>
                <SearchInput
                    type='text'
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                />
            </div>
            <div className={styles.SearchBarButtonContainer}>
                <SearchButton 
                    type='button' 
                    onClick={() => onSubmitHandler(text)}
                    text={text}
                >
                    {isLoading ? <Spinner /> : <MagnifierBackground />}
                </SearchButton>
            </div>
        </div>
    );
}

const mapStateToProps = state => {
    return {
        isTouched: state.isTouched,
        isLoading: state.isLoading
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onSubmitHandler: city => dispatch(search(city))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);