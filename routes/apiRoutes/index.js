const router = require('express').Router();
const db = require('../../db/db.json');
const { createNewNote } = require('../../lib/note');
const { v4: uuidv4 } = require('uuid');

// api routes
router.get("/notes", (req, res) => {
    res.json(db);
})

// call create new note function and send the input
router.post("/notes", (req, res) => {
    // set random id with uuid
    req.body.id = uuidv4()
    const note = createNewNote(req.body, db);
    res.json(note);
    
});

module.exports = router;