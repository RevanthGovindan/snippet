import React from 'react';
import { Route, Switch, Redirect, BrowserRouter } from 'react-router-dom';
import { getItem } from '../common/utils';

class Unauthorized extends React.Component {


    render() {
        const { component: Component, pending, logged, ...rest } = this.props
        return (
            <Route {...rest} render={props => {

                return <Component {...props} />

            }} />
        );
    }

};
export default Unauthorized;