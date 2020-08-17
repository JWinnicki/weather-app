import React from 'react';
import Header from '../../components/Header/Header';

import styles from './MainTemplate.module.scss';

const MainTemplate = ({children}) => (
    <>
        <header>
            <Header />
        </header>
        <main className={styles.MainContainer}>
            {children}
        </main>
    </>
);

export default MainTemplate;