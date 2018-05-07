/*
  link to view locally
  http://localhost:3000/
*/

/*
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
*/


// Viking Code School example
const express = require('express')
const app = express()

app.set('view engine', 'hbs')

app.get('/', (req, res) => {
  res.render('hello', { name: "Viking" })
})

app.get('/person/:personName', (req, res) => {
  const personName = req.params.personName
  res.render('hello', { name: personName })
})

app.listen(3001, () => {
  console.log('Odin is listening on port 3001!')
})
/**/
