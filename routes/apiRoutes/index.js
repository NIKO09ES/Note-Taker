const router = require('express').Router();
const db = require('../../db/db.json');
const { createNewNote } = require('../../lib/note');
const { v4: uuidv4 } = require('uuid');

router.get("/notes", (req, res) => {
    res.json(db);
})

router.post("/notes", (req, res) => {
    // set id based on what the next index of the array will be
    req.body.id = uuidv4()
    const note = createNewNote(req.body, db);
    res.json(note);
    
});

module.exports = router;