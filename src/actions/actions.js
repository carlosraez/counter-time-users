import { createUserWithEmailAndPassword, signInWithEmailAndPassword, } from '../services/services-auth';
import Swal from 'sweetalert2';

import { types } from '../types/types';

export const loginUser = (email, password) => {
	return (dispatch) => {
		signInWithEmailAndPassword(email, password, dispatch).then( ({ user }) => {
			dispatch(login(user.displayName, user.metadata.lastSignInTime ));
			dispatch(startLogged(true));
			Swal.fire('Your login is Success', 'Welcome to BBVA','success'); 
		})
			.catch( e => {
				Swal.fire('Error', e.message, 'error');
				console.log(e); 
			} );
	};        
};

export const registerUser = (email, password, name) => {
	return (dispatch) => {
		createUserWithEmailAndPassword(email, password, dispatch, name).then( async ({ user }) => {
			await user.updateProfile({ displayName:name });
			dispatch(login(user.displayName, user.metadata.lastSignInTime));
			dispatch(startLogged(true));
			Swal.fire('Thanks for Register!', 'Welcome to BBVA', 'success');
		}) 
			.catch( e => { 
				Swal.fire('Error', e.message, 'error');
				console.log(e);  
			});
	};
};

export const login = (name ,lastSignTime) => (
	{
		type: types.login,
		payload: {
			name,
			lastSignTime,
		}
	}); 
    
export const startLogged = () => (
	{
		type: types.startLogged
	}
);

export const finishLogged = () => (
	{
		type: types.finishLogged
	}
);