import React from 'react';
import { Switch, Route, Redirect } from 'react-router';
import { LoginScreen } from '../screens/auth/LoginScreen';
import { RegistrerScreen } from '../screens/auth/RegistrerScreen';

export const AuthRouter = () => {
	return (
		<div className="auth__main">
			<div className="auth__box-container">
				<Switch>
					<Route 
						exact
						path='/auth/login'
						component={ LoginScreen }
					/>
					<Route 
						exact
						path='/auth/registrer'
						component={ RegistrerScreen }
					/>
					<Redirect to="/auth/login"/>
				</Switch>
			</div>
		</div>
	);
};