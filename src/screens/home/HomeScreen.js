import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { finishLogged } from '../../actions/actions';
import { Timer } from '../../Components/timer/Timer';
import { logoutUser } from '../../firebase/firebae-logout';

export const HomeScreen = () => {

	const dispatch = useDispatch();
	const { lastSignTime, name } = useSelector(state => state.auth);

	const handleLogout = () => {
		dispatch( finishLogged() );
		logoutUser();
	};

	return (
		<>
			<header className="header_container mt-100">
				<h1>Welcome {name}!</h1>
				<p className="HomeScreen_description">The last time you accessed was</p>
			</header>
			<main className="d-flex justify-content-center mt-50">
				<Timer 
					lastSignTime={lastSignTime}
				/>
			</main>
			<footer className="footer_container mt-100">
				<button className="btn btn-primary" onClick={handleLogout}>Logout</button>
			</footer>
		</>
	);
};