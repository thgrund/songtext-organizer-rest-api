/* Load Theme Data Access Object */
const ThemeDao = require('../dao/themeDao');

/* Load Controller Common function */
const ControllerCommon = require('./common/controllerCommon');

/* Load Theme entity */
const Theme = require('../model/theme');

/**
 * Theme Controller
 */
class ThemeController {

    constructor() {
        this.themeDao = new ThemeDao();
        this.common = new ControllerCommon();
    }

    /**
     * Tries to find an entity using its Id / Primary Key
     * @params req, res
     * @return entity
     */
    findById(req, res) {
        let id = req.params.id;

        this.themeDao.findById(id)
            .then(this.common.findSuccess(res))
            .catch(this.common.findError(res));
    };

    /**
     * Finds all entities.
     * @return all entities
     */
    findAll(res) {
        this.themeDao.findAll()
            .then(this.common.findSuccess(res))
            .catch(this.common.findError(res));
    };

    /**
     * Counts all the records present in the database
     * @return count
     */
    countAll(res) {

        this.themeDao.countAll()
            .then(this.common.findSuccess(res))
            .catch(this.common.serverError(res));
    };

    /**
     * Updates the given entity in the database
     * @params req, res
     * @return true if the entity has been updated, false if not found and not updated
     */
    update(req, res) {
        let theme = new Theme();
        theme.id = req.body.id;
        theme.maker = req.body.maker;
        theme.model = req.body.model;
        theme.year = req.body.year;
        theme.driver = req.body.driver;

        return this.themeDao.update(theme)
            .then(this.common.editSuccess(res))
            .catch(this.common.serverError(res));
    };

    /**
     * Creates the given entity in the database
     * @params req, res
     * returns database insertion status
     */
    create(req, res) {
        let theme = new Theme();
        if (req.body.id) {
            theme.id = req.body.id;
        }
        theme.themeGeneral = req.body.themeGeneral;
        
        if (req.body.id) {
            return this.themeDao.createWithId(theme)
                .then(this.common.editSuccess(res))
                .catch(this.common.serverError(res));
        }
        else {
            return this.themeDao.create(theme)
                .then(this.common.editSuccess(res))
                .catch(this.common.serverError(res));
        }

    };

    /**
     * Deletes an entity using its Id / Primary Key
     * @params req, res
     * returns database deletion status
     */
    deleteById(req, res) {
        let id = req.params.id;

        this.themeDao.deleteById(id)
            .then(this.common.editSuccess(res))
            .catch(this.common.serverError(res));
    };

    /**
     * Returns true if an entity exists with the given Id / Primary Key
     * @params req, res
     * @return
     */
    exists(req, res) {
        let id = req.params.id;

        this.themeDao.exists(id)
            .then(this.common.existsSuccess(res))
            .catch(this.common.findError(res));
    };
}

module.exports = ThemeController;
