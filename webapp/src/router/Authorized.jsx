import React from 'react';
import { Route, Switch, Redirect, BrowserRouter } from 'react-router-dom';
import { getItem } from '../common/utils';
class Authorized extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loginStatus: false
        }
    }

    componentWillMount(){
        let loginstatus = getItem('loginstatus');
        if (loginstatus) {
            this.setState({ loginStatus: true });
        }
    }

    render() {
        const { component: Component, pending, logged, ...rest } = this.props
        return (
            <Route {...rest} render={props => {
                return this.state.loginStatus
                    ? <Component {...props} />
                    : <Redirect to="/base"/>
            }} />
        );
    }

};
export default Authorized;