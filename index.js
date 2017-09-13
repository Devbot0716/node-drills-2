//dependencies
const express = require('express')
const bodyParser = require('body-parser')
const users = require('./users.json')
const mainCtrl = require('./mainCtrl.js')

//Express
const app = express();
app.use(bodyParser.json());


// === ENDPOINTS/Routes? =========================
 app.get("/api/users", mainCtrl.getAudiUsers);

app.get('/', function(req, res, next){
  next();
  res.send();
});



// =======================================
//Port
var port = 3000;
app.listen(port, () => console.log('Listening on port ', port));
