import React from 'react'
import { Route,Switch, Redirect } from 'react-router-dom'
import { UsersScreen } from '../Components/users/UsersScreen'

export const DashboardRoute = () => {
	return (
		<>
			<div className="container mt-2">
				<Switch>
					<Route exact path="/users" component={ UsersScreen } />
					<Redirect to="/users" />
				</Switch>
			</div>         
		</>
	)
}