import { types } from '../types/types'

export const authReducer = (state = {logged:false }, action) => {
    switch (action.type) {
        case types.login: 
            return {
                email: action.payload.email,
                password: action.payload.password,
            }
        
        case types.register: 
            return {
                email: action.payload.email,
                password: action.payload.password,
                name:action.payload.name,
                surname:action.payload.surname,
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
             
        case types.logout: 
            return { }
            
        default:
            return state
    }
}