import React from 'react';
import { getFetch, postFetch, deleteFetch } from '../common/apicommunicator';
import { baseurl, API } from '../common/constants';
import { getItem, clearAll } from '../common/utils';
class Student extends React.Component {
    constructor() {
        super();
        this.state = {
            selectedDate: '',
            selectedTime: '',
            error: '',
            registeredSchedules: [],
            availableSlots: []
        }
    }

    componentDidMount() {
        let url = baseurl.dev + API.TIMESLOTS;
        getFetch(url, this.slotsResponse, this.slotsError);
    }

    slotsResponse = (response) => {
        if (response) {
            this.setState({ availableSlots: response.times }, () => {
                this.setState({ selectedTime: (this.state.availableSlots[0]) }, () => {
                    this.getSchedules();
                });
            });
        }
    }

    slotsError = (error) => {

    }

    onDatechange = (event) => {
        let d1 = new Date();
        let currentDate = d1.getFullYear() + "-" + (d1.getMonth() + 1) + "-" + d1.getDate();
        let newDate = new Date(currentDate);
        let d2 = new Date(event.target.value);
        let timeDiff = d2.getTime() - newDate.getTime();
        let DaysDiff = Math.ceil(timeDiff / (1000 * 3600 * 24));
        if (DaysDiff > 7) {
            this.setState({ error: "*Choose only inbetween next 7 days" })
            return;
        }
        if (DaysDiff < 0) {
            this.setState({ error: "*Invalid Date" })
            return;
        }
        this.setState({ selectedDate: event.target.value });
    }

    slotChange = (event) => {
        this.setState({ selectedTime: event.target.value });
    }

    addschedule = () => {
        let url = baseurl.dev + API.SET_SCHEDULES;
        let checkReqValidation = this.validationInputs();
        if (checkReqValidation) {
            this.setState({ error: checkReqValidation });
            return;
        } else {
            this.setState({ error: "" });
        }
        let requestData = {
            registeredBy: getItem("username"),
            date: this.state.selectedDate,
            timeslot: this.state.selectedTime,
            approved: false
        };
        postFetch(url, requestData, this.addscheduleResponse, this.addscheduleError)
    }

    addscheduleResponse = (responseData) => {
        if (responseData && responseData.sucess) {
            this.getSchedules();
        }
    }

    addscheduleError = (error) => {
        this.setState({ error: error });
    }

    getSchedules = () => {
        let url = baseurl.dev + API.GET_SCHEDULES + getItem("username");
        getFetch(url, this.getSchedulesResponse, this.getSchedulesError);
    }

    getSchedulesResponse = (responseData) => {
        this.setState({ registeredSchedules: responseData });
    }

    getSchedulesError = (error) => {
        this.setState({ error: error });
    }

    deleteSchedule = (row) => {
        let url = baseurl.dev + API.DELETE_SCHEDULES + (row._id);
        deleteFetch(url, this.deleteScheduleResponse, this.deleteScheduleError);
    }

    deleteScheduleResponse = (responseData) => {
        if (responseData && responseData.sucess) {
            this.getSchedules();
        }
    }

    deleteScheduleError = (error) => {
        this.setState({ error: error });
    }

    validationInputs = () => {
        if (this.state.selectedDate === '') {
            return "*Please choose date";
        }

        if (this.state.selectedTime === '') {
            return "*Please choose Time";
        }
        if (this.state.registeredSchedules.length >= 2) {
            return "*Only two slots allowed per person";
        }

    }

    logout = () => {
        clearAll();
        window.location = "/";
    }

    render() {
        return (
            <div className="student-container">
                <div>
                    <div className="row student-header">
                        <div className="col-xs-7 text-right">Welcome {getItem("username")}</div>
                        <div className="col-xs-5 text-right">
                            <button className="btn btn-danger" onClick={() => { this.logout() }}>LOGOUT</button>
                        </div>
                    </div>
                    <div>
                        <span className="header">Booked slots</span>
                    </div>
                    <div>
                        <div className="row">
                            <div className="col-xs-1">No.</div>
                            <div className="col-xs-3 text-right">Date</div>
                            <div className="col-xs-4">Timeslot</div>
                            <div className="col-xs-4">Action</div>
                        </div>
                        {
                            this.state.registeredSchedules.map((row, key) => {
                                return (
                                    <div className="row" key={key} style={{ paddingTop: "15px" }}>
                                        <div className="col-xs-1 text-center">{key + 1})</div>
                                        <div className="col-xs-3 text-right">{row.date}</div>
                                        <div className="col-xs-4 text-center">{row.timeslot}</div>
                                        <div className="col-xs-4 text-center">
                                            <button className="btn btn-danger btn-sm"
                                                disabled={row.approved} onClick={(e) => { this.deleteSchedule(row) }}>
                                                <span className="glyphicon glyphicon-trash"></span>
                                            </button>
                                        </div>
                                    </div>
                                );
                            })
                        }
                    </div>
                </div>
                <div className="add-section">
                    <div className="row ">
                        <div className="col-xs-4 text-right">
                            <input type="date" value={this.state.selectedDate} onChange={this.onDatechange} />
                        </div>
                        <div className="col-xs-4">
                            <select onChange={this.slotChange}>
                                {this.state.availableSlots.map((row, key) => {
                                    return (
                                        <option key={key}>{row}
                                        </option>
                                    );
                                })}
                            </select>
                        </div>
                        <div className="col-xs-4">
                            <button className="btn btn-default btn-sm" onClick={this.addschedule}>
                                <span className="glyphicon glyphicon-plus"></span> ADD
                        </button>
                        </div>
                    </div>
                </div>
                <div className="error">
                    {this.state.error}
                </div>
            </div>
        );
    }

};
export default Student;