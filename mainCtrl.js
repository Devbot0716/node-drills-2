var users = require('./users.json');

  // console.log(users);



module.exports = {
  getAudiUsers: function (req, res) {
    if(req.query.letter){
      var usersWithA = users.filter(function(user){
        return user.first_name[0] == req.query.letter;
      })
      res.send(usersWithA);
    } else {
    var audiUsers = users.filter(function(user){
      return user.make === req.query.make;
    });
    res.send(audiUsers);
  }
},

  getVehicleYear: function(req, res){
    var greaterCarYear = [];
    for (var i = 0; i < users.length; i++) {
      if(users[i].year > req.query.year){
        greaterCarYear.push(users[i]);
      }
    }
    res.status(200).send(greaterCarYear)
  },

  updateEmail: function(req, res){
    for (var i = 0; i < users.length; i++) {
    if(req.query.lastName == users[i].last_name){
      users[i].email = null;
    }
  }
  res.sendStatus(200);
},

  updateCarMake: function(req, res){
    
  }
};
