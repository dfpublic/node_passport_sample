var Express = require('express');
var passport = require('passport');
var google_router = require('./google/router');
var router = Express.Router();
router.use('/google', google_router);
module.exports = router;