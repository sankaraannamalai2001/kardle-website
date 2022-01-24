const express = require("express");
const port = process.env.PORT || 8080;
const app = express();
const cors = require("cors");
const path = require("path");

app.use(express.json());
app.use(cors());

// app.get("/*", (req, res) => {
//   res.sendFile(path.join(__dirname + "/dist/kardleApp/index.html"));
// });
app.listen(process.env.PORT, (req, res) => {
  console.log("Server running on.." + port);
});
