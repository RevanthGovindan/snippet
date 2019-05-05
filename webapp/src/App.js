import React from 'react';
import { Route, Switch, Redirect, BrowserRouter } from 'react-router-dom';
import Unauthorized from './router/Unauthorized';
import Authorized from './router/Authorized';
import PostLoginPage from './screens/postlogin/PostLoginPage';
import PreLoginPage from './screens/prelogin/PreLoginPage';
import './App.css';
class App extends React.Component {
    constructor() {
        super();
        this.state = {
            loginstatus: false
        }
    }

    changeStatus = (status) => {
        this.setState({ loginstatus: status });
    }

    render() {
        return (
            <div className="App" >
                <BrowserRouter >
                    <Switch >
                        
                        <Unauthorized path="/base"
                            component={PreLoginPage} {...this.props} 
                        />
                        <Authorized path="/home"
                            component={PostLoginPage} {...this.props}
                        />

                        <Redirect to="/home" />
                    </Switch>
                </BrowserRouter>
            </div>
        );
    }
}

export default App;