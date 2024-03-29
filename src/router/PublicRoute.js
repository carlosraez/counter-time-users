import React from 'react';
import { PropTypes } from 'prop-types';
import { Redirect, Route } from 'react-router-dom';

export const PublicRoute = ({
	isAuthenticated = false,
	component: Component,
	...rest
}) => {
	return (
		<Route {...rest}
			component={(props) => (     
				(isAuthenticated)
					? (<Redirect to='/users'/>) 
					: (<Component {...props}/>)
			)}
		/>
	);
};

PublicRoute.propTypes = {
	isAuthenticated: PropTypes.bool.isRequired,
	component: PropTypes.func.isRequired
};