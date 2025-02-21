const db = require('mongoose');

db.connect('mongodb+srv://kakadiyajanvi83:MPJ81gGp2tFnPHpJ@cluster0.gzpxv.mongodb.net/expense-tracker').then(() => {

    console.log("Database Connected");
}).catch((err) => {
    
    console.log("Connection Error :- ", err);
});

module.exports = db;