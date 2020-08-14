import React from 'react';
import Header from '../../components/Header/Header';



const MainTemplate = ({children}) => (
    <>
        <header>
            <Header />
        </header>
        <main>
            {children}
        </main>
    </>
);

export default MainTemplate;