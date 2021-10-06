import { firebase } from './firebase-config';
import Swal from 'sweetalert2';

export const logoutUser = () => {
	firebase.auth().signOut().then(() => {
		Swal.fire('Logout Success', 'BBVA tells you have a good day', 'success'); 
	}).catch((e) => {
		Swal.fire('Error', e.message, 'error');
	});
};