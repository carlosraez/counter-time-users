import { types } from '../types/types'

export const authReducer = (state = {logged:false }, action) => {
	switch (action.type) {
	case types.login: 
		return {
			name:action.payload.name,
			surname:action.payload.surname,
			lastSignTime:action.payload.lastSignTime
		}
            
	case types.startLogged: 
		return {
			...state,
			logged: true 
		}
        
	case types.finishLogged: 
		return {
			...state,
			logged: false 
		}
                         
	default:
		return state
	}
}