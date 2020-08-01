const path = require('path');
const fs = require('fs');

let notes = require('../db/db.json');

function createNewNote(body, notes) {
    const newNote = body;
    console.log(body);
    notes.push(newNote);
    fs.writeFileSync(
        path.join(__dirname, '../db/db.json'),
        JSON.stringify(notes, null, 2)
    );
    return newNote;
    
}
console.log(notes)
module.exports = {
    createNewNote
};