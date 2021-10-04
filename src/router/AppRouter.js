import React, { useEffect, useState } from 'react'
import { BrowserRouter as Router,
	Switch,
	Redirect,
} from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { DashboardRoute  } from './DashboardRoute'
import { PrivateRoute } from './PrivateRoute'
import { PublicRoute } from './PublicRoute'
import { AuthRouter } from './AuthRouter'
import { Loading } from '../Components/loading/Loading'
import { finishLogged, startLogged } from '../actions/actions'

export const AppRouter = () => {

	const dispatch = useDispatch()
	const { logged } = useSelector(state => state.auth)
	const [cheking, setCheking] = useState(true)
  
	useEffect(() => {
             
		const localMemo = true

		if( localMemo ) {
			dispatch(startLogged())
		}
		else {
			dispatch(finishLogged())
		}
        
		setCheking(false)


	}, [setCheking,dispatch])

	if (cheking) {
		return  <Loading  />
	}

	return (
		<Router>
			<Switch>
				<PublicRoute
					path='/auth'
					component={AuthRouter}
					isAuthenticated={ logged } 
				/>
				<PrivateRoute 
					isAuthenticated={ logged } 
					path="/" 
					component={ DashboardRoute} 
				/>
				<Redirect to="/auth/login" />
			</Switch>
		</Router>
	)
}