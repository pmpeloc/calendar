import React from 'react';
import PropTypes from 'prop-types';
import { Redirect, Route } from 'react-router-dom';

export const PublicRoute = ({
    isAuthtenticated,
    component: Component,
    ...rest
}) => {
    return (
        <Route {...rest}
            component={ (props) => (
                (!isAuthtenticated)
                    ? (<Component {...props} />)
                    : (<Redirect to="/" />)
            )}
        />
    )
}

PublicRoute.propTypes = {
    isAuthtenticated: PropTypes.bool.isRequired,
    component: PropTypes.func.isRequired
}