import { firebase } from '../firebase/firebase-config';
import Swal from 'sweetalert2';

import { types } from '../types/types';

export const startLoginEmailPassword = (email ,password ) => {
	return (dispatch) => {
		firebase.auth().signInWithEmailAndPassword(email, password)
			.then( ({ user }) => {
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

export const startRegisterEmailPasswordNameSurname = (email, password, name) => {
	return (dispatch) => {
		firebase.auth().createUserWithEmailAndPassword(email, password )
			.then( async ({ user }) => {
				await user.updateProfile({ displayName:name });
				dispatch(login(user.displayName, user.metadata.lastSignInTime));
				dispatch(startLogged(true));
				Swal.fire('Thanks for Register!', 'Welcome to BBVA', 'success');
			}) 
			.catch( e => { 
				Swal.fire('Error', e.message, 'error');
				console.log(e);  
			} );
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