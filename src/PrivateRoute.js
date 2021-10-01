import React from 'react'
import { useSelector } from "react-redux";
import { Redirect, Route } from 'react-router-dom'

const PrivateRoute = ({ component: Component, ...rest }) => {

    // Add your own authentication on the below line.
    const isAuth = useSelector((state) => state.auth.isLoggedIn);

    return (
        <Route
            {...rest}
            render={props =>
                isAuth ? (
                    <Component {...props} />
                ) : (
                    <Redirect to={{ pathname: '/', state: { from: props.location } }} />
                )
            }
        />
    )
}

export default PrivateRoute
