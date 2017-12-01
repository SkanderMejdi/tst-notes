var express = require('express');
var router = express.Router();

router.delete('/', function(req, res, next) {
  res.locals.connection.query('DELETE FROM notes WHERE id = ?', [
    req.params.bear_id
  ], function (error, results, fields) {
		if (error) throw error;
		res.send(JSON.stringify({"status": 200, "error": null, "message": "Note deleted"}));
	});
});

module.exports = router;
