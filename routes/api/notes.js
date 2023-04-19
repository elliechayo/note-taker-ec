const router = require("express").Router();
const shortid = require("shortid");
const fs = require("fs");
const path = require("path");

let db = require("../../db/db.json");

const updateFile = (data) => {
  // get the file location
  const fileLoc = path.join(__dirname, "..", "..", "/db/db.json");
  // write the new data to the file
  fs.writeFileSync(fileLoc, data);
};

// method GET
// route /api/notes/
// method public
// returns the json data from the local JSON file
router.get("/", (req, res) => {
     res.json(db);
   });

   // method POST
// route /api/notes/
// method public
// updates the JSON file with the new note
router.post("/", (req, res) => {
     let newNote = {
       title: req.body.title,
       text: req.body.text,
       id: shortid(),
     };
     db.push(newNote);
     updateFile(JSON.stringify(db));
     res.json(newNote);
   });
   

