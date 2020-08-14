import React, {useState} from 'react';

import styles from './SearchBar.module.scss';
import SearchInput from '../SearchInput/SearchInput';
import SearchButton from '../SearchButton/SearchButton';
import axios from '../../axios-weather';
import key from '../../api-key';

const SearchBar = () => {
    const [text, setText] = useState('');
    
    const onSubmitHandler = async (city, key) => {
        const response = await axios.get(`find?q=${city}&appid=${key}&units=metric`);
        console.log(response.data);
        const response2 = await axios.get(`weather?q=${city}&appid=${key}&units=metric`);
        console.log(response2.data);
    }

    return (
        <div>
            <SearchInput
                type='text'
                value={text}
		        onChange={(e) => setText(e.target.value)}
            />
            <SearchButton 
                type='button' 
                onClick={() => onSubmitHandler(text, key)}
            >
                Search
            </SearchButton>
        </div>
    );
}

export default SearchBar;