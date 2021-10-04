import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { finishLogged } from '../../actions/actions';

export const LogoutScreen = () => {

    const dispatch = useDispatch()
    const { logged } = useSelector(state => state.auth)

    const  handleLogout = () => {
        dispatch( finishLogged() )
        console.log(logged);
        localStorage.removeItem('accesToken', 'refreshToken')
    }

    return (
        <div className="container">
            <h1>For Logout please use the button</h1>
            <hr></hr>
            <button className="btn btn-primary" onClick={handleLogout}>Logout</button>
            <p>Bye have a nice Day!</p>
        </div>
    )
}