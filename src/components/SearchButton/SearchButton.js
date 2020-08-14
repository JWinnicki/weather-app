import React from 'react';

import styles from './SearchButton.module.scss';

const SearchButton = ({children, ...props}) => {

    return (
        <button {...props}>
            {children}
        </button>
    );
}

export default SearchButton;