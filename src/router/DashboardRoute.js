import React from 'react'
import { Route,Switch, Redirect } from "react-router-dom";
import { Navbar } from "../Components/navbar/Navbar";
import { UsersScreen } from '../Components/users/UsersScreen'
import { LogoutScreen } from '../Components/logout/LogoutScreen';

export const DashboardRoute = () => {
    return (
        <>
            <Navbar /> 
            <div className="container mt-2">
                <Switch>
                <Route exact path="/users" component={ UsersScreen } />
                <Route exact path="/logout" component={ LogoutScreen } />
                <Redirect to="/users" />
                </Switch>
            </div>         
        </>
    )
}