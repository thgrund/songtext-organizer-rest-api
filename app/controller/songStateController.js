/* Load SongState Data Access Object */
const SongStateDao = require('../dao/songStateDao');

/* Load Controller Common function */
const ControllerCommon = require('./common/controllerCommon');

/**
 * Theme Controller
 */
class SongStateController {

    constructor() {
        this.songStateDao = new SongStateDao();
        this.common = new ControllerCommon();
    }

    /**
     * Tries to find an entity using its Id / Primary Key
     * @params req, res
     * @return entity
     */
    findById(req, res) {
        let id = req.params.id;

        this.songStateDao.findById(id)
            .then(this.common.findSuccess(res))
            .catch(this.common.findError(res));
    };

    /**
     * Finds all entities.
     * @return all entities
     */
    findAll(res) {
        this.songStateDao.findAll()
            .then(this.common.findSuccess(res))
            .catch(this.common.findError(res));
    };

    /**
     * Counts all the records present in the database
     * @return count
     */
    countAll(res) {

        this.songStateDao.countAll()
            .then(this.common.findSuccess(res))
            .catch(this.common.serverError(res));
    };


    /**
     * Returns true if an entity exists with the given Id / Primary Key
     * @params req, res
     * @return
     */
    exists(req, res) {
        let id = req.params.id;

        this.songStateDao.exists(id)
            .then(this.common.existsSuccess(res))
            .catch(this.common.findError(res));
    };
}

module.exports = SongStateController;
