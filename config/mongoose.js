const mongooose = require('mongoose');
// connection to mongodb
mongooose.connect('mongodb+srv://priyaarumugam:pNTtyb6EPgp2Qh64@cluster0.4m60krs.mongodb.net/?retryWrites=true&w=majority');

// establish connection
const db = mongooose.connection;

db.on('error', console.error.bind(console, "Error connecting to DB"));
// if db is connected
db.once('open', function () {
    console.log('Connected to Database :: MongoDB');
});

module.exports = db;