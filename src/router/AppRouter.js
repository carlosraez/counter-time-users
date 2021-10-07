import React, { useEffect } from 'react';
import { BrowserRouter as Router,
	Switch,
	Redirect,
} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { listenAuthStateChanges } from '../services/services-auth';

import { DashboardRoute  } from './DashboardRoute';
import { PrivateRoute } from './PrivateRoute';
import { PublicRoute } from './PublicRoute';
import { AuthRouter } from './AuthRouter';
import { login, startLogged } from '../actions/actions';


export const AppRouter = () => {

	const dispatch = useDispatch();
	const { logged } = useSelector(state => state.auth);

	useEffect(() => {
		listenAuthStateChanges((user) => {
			if (user) {
				dispatch(login(user.displayName ,user.metadata.lastSignInTime ));
				dispatch(startLogged(true));
			} else {
				console.log(user);
			}
		});
	}, []);

	return (
		<Router>
			<Switch>
				<PublicRoute
					path='/auth'
					component={AuthRouter}
					isAuthenticated={ logged } 
				/>
				<PrivateRoute 
					isAuthenticated={ logged } 
					path="/" 
					component={ DashboardRoute} 
				/>
				<Redirect to="/auth/login" />
			</Switch>
		</Router>
	);
};