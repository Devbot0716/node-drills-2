var users = require('./users.json');

  // console.log(users);



module.exports = {
  getAudiUsers: function (req, res) {
    return res.send("/users/api/:?make=Audi", req.params.make)
  }
}
