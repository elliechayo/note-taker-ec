const port = process.env.PORT ||3000;

const express = require("express");
const app = express();

// express middlewares to read json
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// set the static folder so that the html,css,js files will be served
app.use(express.static(__dirname + "/public"));

// routes
app.use("/notes", require("./routes/notes"));
app.use("/api/notes", require("./routes/api/notes"));

// redirect every other requests to index.html
app.use("*", (req, res) => res.sendFile(__dirname + "/public/index.html"));

// start the server
app.listen(PORT, () => console.log(`Server listening on *:${PORT}`));