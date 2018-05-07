/*
  link to view locally
  http://localhost:3000/
*/

// Express hello world example
const express = require("express");
const app = express();
const port = process.env.PORT || '3000';

app.set("view engine", "hbs");

app.get("/", (req, res) => {
  res.render("greeting");
});

app.listen(port, () => {
  console.log("Example app listening on port 3000!");
});
/**/

/*
// Viking Code School example
const express = require("express");
const app = express();

app.set("view engine", "hbs");

app.use((req, res, next) => {
  console.log(req.url + " — " + new Date());
  next();
});

app.get("/", function(req, res) {
  res.render("hello");
});

app.get("/names/:name", (req, res) => {
  const name = req.params.name;
  res.render("hello", { name });
});

app.listen(3001, () => {
  console.log("Odin is listening on port 3001!");
});
*/
