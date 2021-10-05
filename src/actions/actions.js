import { firebase } from '../firebase/firebase-config'
import Swal from 'sweetalert2'

import { types } from '../types/types'

import { finishLoading, startLoading } from './ui'

export const startLoginEmailPassword = () => {
	return (dispatch) => {
		dispatch( startLoading() )
           
			.catch( (err) => { 
				dispatch( finishLoading()) 
				console.warn(err)
			})
	}
}

export const startRegisterEmailPasswordNameSurname = (email, password, name, ) => {
	return (dispatch) => {
		dispatch( startLoading() )
		console.log(email)
		firebase.auth().createUserWithEmailAndPassword(email, password )
			.then( async ({ user }) => {
				await user.updateProfile({ displayName:name })
				console.log(user.metadata.lastSignInTime)
				//dispatch(register( user.uid, user.displayName ))
				Swal.fire('Thanks for Register!', 'Welkome to BBVA','success' )
				dispatch(finishLoading())
			}) 
			.catch( e => { 
				Swal.fire('Error', e.message, 'error')
				console.log(e)  
				dispatch(finishLoading()) 
			
			} )
	}
}

export const login = (email, password) => (
	{
		type: types.login,
		payload: {
			email,
			password,
		}
	}) 
    
export const register = (email, password, name, surname) => (
	{
		type: types.login,
		payload: {
			email,
			password,
			name,
			surname,
		}
	}) 


export const startLogged = () => (
	{
		type: types.startLogged

	}
)

export const finishLogged = () => (
	{
		type: types.finishLogged
        
	}
)