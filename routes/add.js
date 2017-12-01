var express = require('express');
var router = express.Router();

router.put('/', function(req, res, next) {
  var expire = new Date(req.body.expire);
  res.locals.connection.query('INSERT INTO notes (title, expire) VALUES (?, ?)', [
      req.body.title,
      expire.toISOString().slice(0, 19).replace('T', ' ')
    ], function (error, results, fields) {
		if (error) throw error;
		res.send(JSON.stringify({"status": 200, "error": null, "message": "Note created"}));
	});
});

module.exports = router;
