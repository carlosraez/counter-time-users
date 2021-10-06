import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './App';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import './styles/styles.scss';

ReactDOM.render(
	<App />,
	document.getElementById('root')
);

serviceWorkerRegistration.unregister();
