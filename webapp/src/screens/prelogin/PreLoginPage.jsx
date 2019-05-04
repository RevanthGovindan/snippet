import React from 'react';
import { baseurl,API } from '../../common/constants';
import { postFetch } from '../../common/apicommunicator';
class PreLoginPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
        }
    };

    stateChange = (event) => {
        this.setState({ [event.target.name]: [event.target.value] });
    }

    submitLogin = () => {
        let url = baseurl.dev +API.LOGIN;
        let body = {
            name: this.state.username,
            password: this.state.password
        }
        postFetch(url, body, this.submitLoginResponse, this.submitLogin);
    }

    submitLoginResponse = (response) => {
        console.log(response)
    };

    submitLoginError = (error) => {
        console.log(error);
    }

    render() {
        return (
            <div>
                <div>
                    Name :
                    <input type="text" value={this.state.username} onChange={this.stateChange} name="username" />
                </div>

                <div>
                    Password :
                    <input type="text" value={this.state.password} onChange={this.stateChange} name="password" />
                </div>
                <div>
                    <button onClick={(e) => { this.submitLogin() }}>submit</button>
                </div>
            </div>
        );
    }

};
export default PreLoginPage;