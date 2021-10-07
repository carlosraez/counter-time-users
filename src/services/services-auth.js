import { firebase } from './firebase-config';

export const createUserWithEmailAndPassword = (email ,password ) => {
	return firebase.auth().createUserWithEmailAndPassword(email, password );		
};

export const signInWithEmailAndPassword = (email ,password ) => {
	return firebase.auth().signInWithEmailAndPassword(email, password);
};

export const logoutUser = () => {
	return firebase.auth().signOut();
};

export const listenAuthStateChanges = (callback) => {
	firebase.auth().onAuthStateChanged(callback);
};