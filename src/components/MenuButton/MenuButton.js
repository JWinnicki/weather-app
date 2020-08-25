import React from 'react';

import styles from './MenuButton.module.scss';

const MenuButton = ({children, ...props}) => {

    return (
        <button className={styles.MenuButton} {...props}>
            {children}
        </button>
    );
}

export default MenuButton;