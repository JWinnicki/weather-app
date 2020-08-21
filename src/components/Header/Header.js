import React from 'react';
import {connect} from 'react-redux';

import styles from './Header.module.scss';

const Header = ({isTouched}) => (
    <div className={isTouched ? styles.HeaderTouched : styles.Header}>
        <h1 className={styles.HeaderTitle}>
            LOGO
        </h1>
    </div>
);

const mapPropsToState = state => {
    return {
        isTouched: state.isTouched
    }
}
export default connect(mapPropsToState)(Header);