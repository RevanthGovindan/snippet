import React from 'react';
import { getFetch, postFetch } from '../common/apicommunicator';
import { baseurl, API } from '../common/constants';
import { clearAll } from '../common/utils';
class Admin extends React.Component {
    constructor() {
        super();
        this.state = {
            registeredSlots: [],
            error: ''
        }
    }

    componentDidMount() {
        this.getSchedules();
    }

    getSchedules = () => {
        let url = baseurl.dev + API.GET_SCHEDULES_ADMIN;
        getFetch(url, this.getSchedulesResponse, this.getSchedulesError);
    }

    getSchedulesResponse = (responseData) => {
        if (responseData) {
            this.setState({ registeredSlots: responseData });
        }
    }

    getSchedulesError = (error) => {
        this.setState({ error: error });
    }

    approveSchedules = (id) => {
        let url = baseurl.dev + API.APPROVE_SCHEDULES;
        let body = {
            id: id
        }
        postFetch(url, body, this.approveSchedulesResponse, this, this.approveSchedulesError);
    }

    approveSchedulesResponse = (responseData) => {
        if (responseData && responseData.sucess) {
            this.getSchedules();
        }
    }

    approveSchedulesError = (error) => {
        this.setState({ error: error });
    }

    logout = () => {
        clearAll();
        window.location = "/";
    }

    render() {
        return (
            <div className="admin-page">
                <div className="row">
                    <div className="col-xs-7 text-right">Welcome Alumni!</div>
                    <div className="col-xs-5 text-right">
                        <button className="btn btn-danger" onClick={() => { this.logout() }}>LOGOUT</button>
                    </div>
                </div>
                <div>
                    <span className="header">Booked slots</span>
                </div>
                <div className="slots-container">
                    <div className="row">
                        <div className="col-xs-1">No.</div>
                        <div className="col-xs-3">Registered By</div>
                        <div className="col-xs-2">Date</div>
                        <div className="col-xs-3">Timeslot</div>
                        <div className="col-xs-3">Approve</div>
                    </div>
                    {
                        this.state.registeredSlots.map((row, key) => {
                            return (
                                <div className="row slot-data" key={key}>
                                    <div className="col-xs-1 text-center">{key + 1})</div>
                                    <div className="col-xs-3">
                                        {row.registeredBy}
                                    </div>
                                    <div className="col-xs-2">
                                        {row.date}
                                    </div>
                                    <div className="col-xs-3">
                                        {row.timeslot}
                                    </div>
                                    <div className="col-xs-3">
                                        <button className="btn btn-success" onClick={() => { this.approveSchedules(row._id) }}
                                            disabled={row.approved}>
                                            {row.approved ? "Approved" : "Confirm"}</button>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        );
    }

};
export default Admin;