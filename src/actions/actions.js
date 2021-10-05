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

export const startRegisterEmailPasswordNameSurname = (email,password ,name ) => {
	return (dispatch) => {
		dispatch( startLoading() )
		firebase.auth().createUserWithEmailAndPassword(email, password )
			.then( async ({ user }) => {
				await user.updateProfile({ displayName:name })
				dispatch(login(user.displayName ,user.metadata.lastSignInTime ))
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

export const login = (name ,lastSignTime ) => (
	{
		type: types.login,
		payload: {
			name,
			lastSignTime,
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