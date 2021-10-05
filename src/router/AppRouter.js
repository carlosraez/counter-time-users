import React, { useEffect } from 'react';
import { BrowserRouter as Router,
	Switch,
	Redirect,
} from 'react-router-dom';
import { useSelector } from 'react-redux';
//import { firebase } from '../firebase/firebase-config';

import { DashboardRoute  } from './DashboardRoute';
import { PrivateRoute } from './PrivateRoute';
import { PublicRoute } from './PublicRoute';
import { AuthRouter } from './AuthRouter';


export const AppRouter = () => {

	const { logged } = useSelector(state => state.auth);

	useEffect(() => {
		// let getTime = moment().format('llll');
		// setActualTime(getTime);
		
	
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