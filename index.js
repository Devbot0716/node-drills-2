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

app.get('/api/users/vehicleYear', mainCtrl.getVehicleYear);

app.put('/api/users/emailUpdate', mainCtrl.updateEmail);

app.put('/api/users/updateVehicle', mainCtrl.updateCarMake);

app.delete('/api/removeUser', mainCtrl.deleteUser)




// =======================================
//Port
var port = 3000;
app.listen(port, () => console.log('Listening on port ', port));
