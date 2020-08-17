import React from 'react';

import MainTemplate from '../../templates/MainTemplate/MainTemplate';
import Main from '../Main/Main';
import styles from './App.module.scss';


const App = () => {

	return (
		<div className={styles.App}>
			<MainTemplate>
				<Main />
			</MainTemplate>
		</div>
	);
}

export default App;