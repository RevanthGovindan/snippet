import React from 'react';
import { getItem } from '../../common/utils';
import Student from '../../components/Student';
import Admin from '../../components/Admin';
class PostLoginPage extends React.Component {
    constructor(props) {
        super();
        this.state = {
            adminRights: false
        }
    }

    componentWillMount() {
        let permissions = getItem("accountdetails");
        if (permissions.admin === "Y") {
            this.setState({ adminRights: true });
        }
    }

    render() {
        return (
            <div>
                {                    
                    this.state.adminRights ? 
                    <Admin/>:
                    <Student/>
                }
            </div>
        );
    }

};
export default PostLoginPage;