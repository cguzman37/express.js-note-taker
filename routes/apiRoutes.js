const app = require('express').Router();
let db = require('../db/db.json');
const fs = require('fs');
const express = require('express');
let d = require('../db/db.json');
const f = require('fs');
const { Router } = require('express');


app.get("/api/notes",(req, res) => {
    res.json(db);
});


// app.post('/api/notes',(req,res) => {
//     let newNote = {
//         ...req.body,
//     id: Math.floor(Math.random() * 1000000000)
//     }
// db.push(newNote);

// fs.writeFileSync('db/db.json', JSON.stringify(db), function(err){
//     if(err) throw err;
// });
// res.json(db);
// });

app.post('/notes', (req, res) => {
    const notesAsJson = fs.readFileSync('./db/db.json');
    const notes = JSON.parse(notesAsJson);
    const newNote = req.body;
    newNote.id = uuidv4();
    notes.push(newNote);
    fs.writeFileSync('./db/db.json', JSON.stringify(notes));
    res.json(notes); 
    
});

module.exports = app;