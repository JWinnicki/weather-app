import React from 'react';
import Header from '../../componentes/Header/Header';



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