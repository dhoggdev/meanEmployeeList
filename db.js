const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/MeanDB', (err) => {
    if (!err) {
        console.log("Mongo connection successful");
    }
    else {
        console.log("Failed to connect to MongoDB: " + JSON.stringify(err, undefined, 2));
    }
});

module.exports = mongoose;