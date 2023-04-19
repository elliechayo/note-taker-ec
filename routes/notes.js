const router = require("express").Router();
const path = require("path");

// method GET
// route /notes
// method public
// returns the notes.html file
router.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../", "/public/notes.html"));
});

module.exports = router;