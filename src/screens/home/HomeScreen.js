import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { firebase } from '../../firebase/firebase-config';
import Swal from 'sweetalert2';

import { finishLogged } from '../../actions/actions';
import { Timer } from '../../Components/timer/Timer';


export const HomeScreen = () => {

	const dispatch = useDispatch();
	const { lastSignTime, name } = useSelector(state => state.auth);

	const  handleLogout = () => {
		dispatch( finishLogged() );
		firebase.auth().signOut().then(() => {
			Swal.fire('Logout Success', 'BBVA tells you have a good day','success'); 
		}).catch((e) => {
			Swal.fire('Error', e.message, 'error');
		});
	
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