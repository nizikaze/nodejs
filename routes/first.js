var express = require('express');
var router = express.Router();
//var session = require('express-session');

router.post('/', function(req, res, next) {
  var name = req.body.name
  var status ={
    name: name,
    hp: 100,
    libido: 0
  };
  req.session.status = status;

  var msglog = name + "は不気味なダンジョンへと踏み出した……";

  res.render('index', { 
    _status: '_status', 
    status: status,
    msglog: msglog, 
    interface: './_interface_main'
  });
});

module.exports = router;
