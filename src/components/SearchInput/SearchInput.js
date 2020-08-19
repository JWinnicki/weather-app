import React from 'react';

import styles from './SearchInput.module.scss';

const SearchInput = props => {

    return (
        <input className={styles.SearchInput} {...props}/>
    );
}

export default SearchInput;