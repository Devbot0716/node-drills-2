var users = require('./users.json');

  // console.log(users);



module.exports = {
  getAudiUsers: function (req, res) {
    return res.send({"users": users[i].make})
  }
}
