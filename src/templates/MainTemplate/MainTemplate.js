import React from 'react';

//import Header from '../../components/Header/Header';
import styles from './MainTemplate.module.scss';

const MainTemplate = ({children}) => (
    <>
        <header className={styles.HeaderContainer}>
           {/*  <Header /> */}
        </header>
        <main className={styles.MainContainer}>
            {children}
        </main>
        <footer  className={styles.FooterContainer} />
    </>
);

export default MainTemplate;