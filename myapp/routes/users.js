var express = require('express');
var router = express.Router();
var path = require('path');
/* GET users listing. */
router.get('/', function(req, res, next) {
  	var imgPath = './images/img1.jpg'
	console.log(imgPath)
  	res.send(`<img src='${imgPath}'/>`);
});

module.exports = router;
