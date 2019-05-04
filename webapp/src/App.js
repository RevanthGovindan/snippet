import React from 'react';
import { Route, Switch, Redirect, BrowserRouter } from 'react-router-dom';
import Unauthorized from './router/Unauthorized';
import Authorized from './router/Authorized';
import PostLoginPage from './screens/postlogin/PostLoginPage';
import PreLoginPage from './screens/prelogin/PreLoginPage';
class App extends React.Component {

  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Switch>
            <Unauthorized path="/base" component={PreLoginPage} {...this.props}/>
            <Authorized path="/home" component={PostLoginPage} {...this.props}/>
            <Redirect to="/base" />
            {/* <Route path="*" component={PageNotFound} /> */}
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
