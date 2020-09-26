import React from 'react';

import styles from './Toggler.module.scss';

const Toggler = ({options, currentValue, click}) => {

    const renderOptions = () => {
        return options.map(el => {
            return (
                <button key={el} onClick={() => click(el)} className={currentValue === el ? styles.TogglerItemButtonActive : styles.TogglerItemButton}>{el}</button>
            );
        })
    }

    return (
        <div className={styles.Toggler}>
            {renderOptions()}
        </div>
    );
}

export default Toggler;