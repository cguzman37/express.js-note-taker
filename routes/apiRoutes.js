const app = require('express').Router();
let db = require('../db/db.json');
const fs = require('fs');

app.get("/notes",(req, res) => {
    res.json(db);
});


app.post('/notes',(req,res) => {
    let newNote = {
        ...req.body,
    id: Math.floor(Math.random() * 1000000000)
    }
db.push(newNote);

fs.writeFileSync('db/db.json', JSON.stringify(db), function(err){
    if(err) throw err;
});
res.json(db);
});

module.exports = app;