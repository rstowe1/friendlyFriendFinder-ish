var friendData = require("../data/userData");

module.exports = function (app) {


  app.get("/api/friends", function (req, res) {
    res.json(friendData);
  });


  app.post("/api/friends", function (req, res) {
    friendData.push(req.body);
    res.json(true);
  });

  app.post("/api/result", function () {
    // Empty out the arrays of data
    friendData = [];

    console.log(friendData);
  });
};