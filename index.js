/*
  link to view locally
  http://localhost:3000/
  or
  // viking link doesn't actually work anymore ???
  http://localhost/names/< insert name >:3000/
*/

// Express hello world example
const express = require("express");
const app = express();

app.set("view engine", "hbs");

app.get("/", (req, res) => {
  res.render("greeting");
});

app.listen(3000, () => {
  console.log("Example app listening on port 3000!");
});

/*
// Viking Code School example
const express = require("express");
const app = express();

app.get("/names/:name", function(req, res) {
  const name = req.params.name;
  res.send("Hello " + name);
});

app.listen(3000, function() {
  // This function is run when the app starts up.
  console.log("Kemst þó hægt fari.");
});
*/
