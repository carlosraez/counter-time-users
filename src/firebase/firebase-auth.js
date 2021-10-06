import { firebase } from '../firebase/firebase-config';
import Swal from 'sweetalert2';

import { login, startLogged } from '../actions/actions';

export const createUserWithEmailAndPassword = (email ,password, dispatch, name) => {
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

export const signInWithEmailAndPassword = (email ,password, dispatch) => {
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