const path = require('path');
const fs = require('fs');
module.exports = app => {
    fs.readFile("db.json", "utf8", (err, data) => {
        if (err) throw err;
        var notes = JSON.parse(data);

        app.get('/api/notes', (req, res) => {
            res.json(notes);
        });
        app.post('/api/notes', (req, res) => {
            var newNote = req.body;
            notes.push(newNote);
            updateDb();
        });
        app.get('/api/notes/:id', (req, res) =>{
            res.json(notes[req.params.]);
        });
        app.delete('/api/notes/:id', (req, res) => {
            notes.splice(req.params.id, 1);
            updateDb();
        });

app.get('/notes', (req, res) => 
{res.sendFile(path.join(__dirname, '../public/notes.html'))
    });
    app.get('*', (req, res) =>{
        res.sendFile(path.join(__dirname, '../public/index.html'))
    });
    function updateDb() {
        fs.writeFile("db.json", JSON.stringify(notes), (err) => {
            if (err) throw err;
        return true;
        });
    }

});
}







