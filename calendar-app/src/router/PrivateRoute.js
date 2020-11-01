import React from 'react';
import PropTypes from 'prop-types';
import { Redirect, Route } from 'react-router-dom';

export const PrivateRoute = ({
    isAuthtenticated,
    component: Component,
    ...rest
}) => {    
    return (
        <Route {...rest}
            component={ (props) => (
                (isAuthtenticated)
                    ? (<Component {...props} />)
                    : (<Redirect to="/login" />)
            )}
        />
    )
}

PrivateRoute.propTypes = {
    isAuthtenticated: PropTypes.bool.isRequired,
    component: PropTypes.func.isRequired
}