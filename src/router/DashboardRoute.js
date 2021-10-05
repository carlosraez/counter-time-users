import React from 'react';
import { Route,Switch, Redirect } from 'react-router-dom';
import { HomeScreen } from '../screens/home/HomeScreen';

export const DashboardRoute = () => {
	return (
		<>
			<div className="container">
				<Switch>
					<Route exact path="/home" component={ HomeScreen } />
					<Redirect to="/home" />
				</Switch>
			</div>         
		</>
	);
};