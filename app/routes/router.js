/**
 * Express Router configuration
 */
const express = require('express');
const router = express.Router();

/* API routes */
// router.use('/car', require('./api/carRoutes'));
// router.use('/driver', require('./api/driverRoutes'));
router.use('/song', require('./api/songRoutes'));
router.use('/theme', require('./api/themeRoutes'));
router.use('/songState', require('./api/songStateRoutes'));

module.exports = router;
