const fs = require("fs");
require("dotenv").config({ path: "./env_/.env" });
require('./../../db.js');
const mongoose = require('mongoose');
const tourFile = require('./tours-simple.json');
// Import the Tour model or schema from the db.js file
const Tour = require('../../models/tourModel.js'); 
const tours = JSON.parse(fs.readFileSync( __dirname +'/tours-simple' +".json", 'utf8'));

// Import data into the database
const importData = async () => {
    try {
        const data = await Tour.create(tours);
        console.log('Data imported successfully.');
    } catch (err) {
        res.json({
            status: 'failed',
            message: err.message
        })
    }
};

// Delete all the Tour data
const deleteData = async () => {
    try {
        await Tour.deleteMany();
        console.log('Data deleted successfully.');
    } catch (err) {
        console.error(err);
    }
};

console.log(process.argv);

// Call the importData or deleteData functions based on command line arguments
if (process.argv[2] === '--import') {
    importData();
} else if (process.argv[2] === '--delete') {
    deleteData();
}

module.exports = {importData}