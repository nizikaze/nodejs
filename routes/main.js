var express = require('express');
var router = express.Router();
var session = require('express-session');
var msg = require('./msg');


router.post('/', function(req, res, next) {

  var status = req.session.status;
  var name = status.name;

  var msglog = msg.msglog("触手トラップだ！");
  msglog += msg.msglog(name + "は　20　のダメージを受けた！");
  msglog += msg.msglog(name + "の淫欲が　20　上がった！");

  status.hp -= 20;
  status.libido += 20;
  req.session.status = status;

  res.render('index', { 
    _status: '_status',
    status: status,
    msglog: msglog, 
    interface: './_interface_nochoice'
  });


});

module.exports = router;
