const app = require('express').Router();
let db = require('../db/db.json');
const fs = require('fs');
const express = require('express');
const util = require('util');
const uuidv4 = require('uuid/v4');
const readFileAsync = util.promisify(fs.readFile);
const writeFileAsync = util.promisify(fs.writeFile);

app.get("/notes", async (req, res) => {
    var notes = await readFileAsync('./db/db.json', 'utf8');
    let parsedNotes = [].concat(JSON.parse(notes));
    console.log(parsedNotes)
    res.json(parsedNotes);
});

app.post('/notes', (req, res) => {
    const notesAsJson = fs.readFileSync('./db/db.json');
    const notes = JSON.parse(notesAsJson);
    const newNote = req.body;
    newNote.id = uuidv4();
    notes.push(newNote);
    fs.writeFileSync('./db/db.json', JSON.stringify(notes));
    res.json(notes); 
    
});

app.delete('/notes/:id', (req, res) => {
    notes.splice(req.params.id, 1);
    
});
module.exports = app;