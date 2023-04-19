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
   
   // method DELETE
// route /api/notes/:id
// method public
// delete the specified note from the JSON file
router.delete("/:id", (req, res) => {
     const id = req.params.id;
     // remove the specified note from the db
     db = db.filter((e) => e.id !== id);
     // updates the JSON file with the new data
     updateFile(JSON.stringify(db));
     res.json({ success: true });
   });
   
   module.exports = router;
   

