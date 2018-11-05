/* Load Modules */
const express = require('express');
const router = express.Router();

/* Load controller */
const SongController = require('../../controller/songController');
const songController = new SongController();

/**
 * Song Entity routes
 */
router.get('/count', function (req, res) {
    songController.countAll(res);
});

router.get('/exists/:id', function (req, res) {
    songController.exists(req, res);
});

router.get('/:id', function (req, res) {
    songController.findById(req, res);
});

router.get('/', function (req, res) {
    songController.findAll(res);
});

router.put('/:id', function (req, res) {
    songController.update(req, res);
});

router.post('/create', function (req, res) {
    songController.create(req, res);
});

router.delete('/:id', function (req, res) {
    songController.deleteById(req, res);
});

module.exports = router;