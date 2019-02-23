/* Load Modules */
const express = require('express');
const router = express.Router();
const cors = require('cors');

/* Load controller */
const SongStateController = require('../../controller/songStateController');
const songStateController = new SongStateController();

/**
 * Theme Entity routes
 */
router.get('/count', function (req, res) {
  songStateController.countAll(res);
});

router.get('/exists/:id', function (req, res) {
  songStateController.exists(req, res);
});

router.get('/:id', function (req, res) {
  songStateController.findById(req, res);
});

router.get('/', function (req, res) {
  songStateController.findAll(res);
});


module.exports = router;
