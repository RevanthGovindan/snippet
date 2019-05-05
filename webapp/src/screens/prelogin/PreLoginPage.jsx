import React from 'react';
import { baseurl, API } from '../../common/constants';
import { postFetch } from '../../common/apicommunicator';
import { setItem } from '../../common/utils';
class PreLoginPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            error: ''
        }
    };

    stateChange = (event) => {
        this.setState({ [event.target.name]: [event.target.value] });
    }

    submitLogin = () => {
        let url = baseurl.dev + API.LOGIN;
        if (this.state.username === "" || this.state.password === "") {
            this.setState({ error: "Fields can't be empty" })
            return;
        }
        let body = {
            name: this.state.username,
            password: this.state.password
        }
        postFetch(url, body, this.submitLoginResponse, this.submitLogin);
    }

    submitLoginResponse = (response) => {
        if (!response.success) {
            this.setState({ error: response.message });
        } else {
            setItem("loginstatus", true);
            setItem("accountdetails", response.permissions);
            setItem("username", response.name);
            this.props.history.push("/home")
        }
    };

    submitLoginError = (error) => {
        this.setState({ error: error.message })
    }

    render() {
        return (
            <div className="login-container display-flex-center">
                <div className="login-header"> <span>Alumni Meet</span></div>
                <div className="login-header"><span >Please Login</span></div>
                <div className="form ">
                    <div>
                        <input type="text" value={this.state.username} onChange={this.stateChange}
                            name="username" placeholder="Enter user name" />
                    </div>

                    <div>
                        <input type="password" value={this.state.password} onChange={this.stateChange}
                            name="password" placeholder="Enter password" />
                    </div>

                    <div>
                        <button onClick={(e) => { this.submitLogin() }}>submit</button>
                    </div>
                    <div className="message">
                        {this.state.error}
                    </div>
                </div>
            </div>
        );
    }

};
export default PreLoginPage;