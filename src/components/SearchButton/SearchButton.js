import React from 'react';

import styles from './SearchButton.module.scss';

const SearchButton = ({children, text, ...props}) => {

    return (
        <button className={styles.SearchButton} {...props} disabled={text === '' ? true : false}>
            {children}
        </button>
    );
}

export default SearchButton;