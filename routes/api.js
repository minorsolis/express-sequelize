const router = require('express').Router();

const apiLocationRouter = require('./api/locations')
router.use('/locations', apiLocationRouter)

module.exports = router;

