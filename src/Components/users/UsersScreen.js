import React from 'react'
import { useDispatch } from 'react-redux'
import { finishLogged } from '../../actions/actions'


export const UsersScreen = () => {

	const dispatch = useDispatch()

	const  handleLogout = () => {
		dispatch( finishLogged() )
	}

	return (
		<>
			<header className="container">
				<h1>Welcome</h1>
				<p>The last time you accessed was</p>
			</header>
			<main>

			</main>
			<footer>
				<button className="btn btn-primary" onClick={handleLogout}>Logout</button>
			</footer>
		</>
	)
}