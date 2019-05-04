var mongoose = require('mongoose');
const Users = require('./models/User');
const Allowedtime = require('./models/Allowedtime');

mongoose.connect('mongodb://localhost:27017/snippet', { useNewUrlParser: true, useFindAndModify: false })
    .then(db => console.log('db connected'))
    .catch(err => console.log(err));
const addUsers = async () => {
    const users = [
        {
            name: "student1", password: "student1", permissions: [
                {
                    addTimeslot: "Y",
                    editTimeslot: "Y",
                    deleteTimeslot: "Y",
                    slotConfirmation: "N",
                    admin: "N"
                }
            ]
        },
        {
            name: "student2", password: "student2", permissions: [
                {
                    addTimeslot: "Y",
                    editTimeslot: "Y",
                    deleteTimeslot: "Y",
                    slotConfirmation: "N",
                    admin: "N"
                }
            ]
        },
        {
            name: "alumni", password: "alumni", permissions: [
                {
                    addTimeslot: "N",
                    editTimeslot: "N",
                    deleteTimeslot: "N",
                    slotConfirmation: "Y",
                    admin: "Y"
                }
            ]
        },
    ];
    await Users.deleteMany();
    console.log("users removed");
    await Users.insertMany(users);
    console.log("users added");
};

const addTimings = async () => {
    const timeings = {
        times: [
            "13-14",
            "16-17",
            "18-19"
        ]
    };
    await Allowedtime.deleteMany();
    console.log("timings cleared");
    await Allowedtime.create(timeings);
};

addUsers();
addTimings();