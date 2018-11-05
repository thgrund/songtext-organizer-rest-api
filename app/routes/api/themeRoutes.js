/* Load Modules */
const express = require('express');
const router = express.Router();
const cors = require('cors');

/* Load controller */
const ThemeController = require('../../controller/themeController');
const themeController = new ThemeController();

/**
 * Theme Entity routes
 */
router.get('/count', function (req, res) {
    themeController.countAll(res);
});

router.get('/exists/:id', function (req, res) {
    themeController.exists(req, res);
});

router.get('/:id', function (req, res) {
    themeController.findById(req, res);
});

router.get('/', function (req, res) {
    themeController.findAll(res);
});

router.put('/:id', function (req, res) {
    themeController.update(req, res);
});

router.post('/create', function (req, res) {
    themeController.create(req, res);
});

router.delete('/:id', function (req, res) {
    themeController.deleteById(req, res);
});

module.exports = router;
