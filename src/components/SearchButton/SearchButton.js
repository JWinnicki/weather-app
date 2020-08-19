import React from 'react';

import styles from './SearchButton.module.scss';
import icon from '../../assets/magnifier.svg';

const SearchButton = ({children, ...props}) => {

    return (
        <button className={styles.SearchButton} {...props}>
            {children}
        </button>
    );
}

export default SearchButton;