import React from 'react';

import styles from './Main.module.scss';
import SearchBar from '../../components/SearchBar/SearchBar';

const Main = () => {
    return (
        <div className={styles.Main}>
            <SearchBar />
        </div>
    );
}

export default Main;