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

export const startRegisterEmailPasswordNameSurname = (email, password, name, surname) => {
	return (dispatch) => {
		dispatch( startLoading() )
		fetch('http://51.38.51.187:5050/api/v1/auth/sign-up', {
			method: 'POST',
			body: JSON.stringify({
				email,
				password,
				name,
				surname,
			}),
			headers: {'Content-Type': 'application/json' }})
			.then((res) => { 

				if (res.status === 409) { 
					alert('Email Already exists')
					dispatch( finishLoading())
				}
				if (res.status === 204 ) { 
					dispatch( finishLoading() )
					alert('El usuario se ha dado de alta correctamente') }
				dispatch( startLogged() )
			})   
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