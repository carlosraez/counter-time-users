import React from 'react';
import { useDispatch, /*useSelector  */} from 'react-redux';

import { finishLogged } from '../../actions/actions';
import { Timer } from '../../Components/timer/Timer';


export const UsersScreen = () => {

	const dispatch = useDispatch();
	//const { name } = useSelector(state => state.auth);

	const  handleLogout = () => {
		dispatch( finishLogged() );
	};

	const name  = 'Carlos';

	return (
		<>
			<header className="container">
				<h1>Welcome {name}!</h1>
				<p>The last time you accessed was</p>
			</header>
			<main>
				<Timer />
			</main>
			<footer>
				<button className="btn btn-primary" onClick={handleLogout}>Logout</button>
			</footer>
		</>
	);
};