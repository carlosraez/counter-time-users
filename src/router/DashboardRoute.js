import React from 'react'
import { Route,Switch, Redirect } from 'react-router-dom'
import { UsersScreen } from '../screens/home/HomeScreen'

export const DashboardRoute = () => {
	return (
		<>
			<div className="container mt-2">
				<Switch>
					<Route exact path="/home" component={ UsersScreen } />
					<Redirect to="/home" />
				</Switch>
			</div>         
		</>
	)
}