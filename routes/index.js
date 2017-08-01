var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {

  res.render('index', {
    _status: 'empty',
    status:'',
    msglog: '--PUSH START--', 
    interface: './_interface_index'
  });
});

module.exports = router;
