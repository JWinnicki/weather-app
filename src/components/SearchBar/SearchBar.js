import React, {useState} from 'react';
import {connect} from 'react-redux';


import styles from './SearchBar.module.scss';
import SearchInput from '../SearchInput/SearchInput';
import SearchButton from '../SearchButton/SearchButton';
import {search} from '../../store/actions/forecast';
/* import axios from '../../axios-weather';
import key from '../../api-key'; */

const SearchBar = ({onSubmitHandler, isTouched}) => {
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
                />
            </div>
        </div>
    );
}

const mapStateToProps = state => {
    return {
        isTouched: state.isTouched
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onSubmitHandler: city => dispatch(search(city))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);