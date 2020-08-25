import React from 'react';

import styles from './SVGBackground.module.scss';

const SVGBackground = ({icon, rotate}) => {
    const style = {
        backgroundImage: `url(${icon})`,
        transform: `rotate(${rotate ? rotate : 0}deg)`
    }
    return (
        <div 
            className={styles.SVGBackground}
            style={style}
        />
    );
}

export default SVGBackground;