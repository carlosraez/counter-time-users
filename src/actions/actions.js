import { createUserWithEmailAndPassword, signInWithEmailAndPassword, } from '../firebase/firebase-auth';

import { types } from '../types/types';


export const loginUser = (email, password) => {
	return (dispatch) => {
		signInWithEmailAndPassword(email, password, dispatch);
	};        
};

export const registerUser = (email, password, name) => {
	return (dispatch) => {
		createUserWithEmailAndPassword(email, password, dispatch, name);
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