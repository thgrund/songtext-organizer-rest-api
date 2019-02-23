/* Load Song Data Access Object */
const SongDao = require('../dao/songDao');

/* Load Controller Common function */
const ControllerCommon = require('./common/controllerCommon');

/* Load Song entity */
const Song = require('../model/song');

/**
 * Song Controller
 */
class SongController {

    constructor() {
        this.songDao = new SongDao();
        this.common = new ControllerCommon();
    }

    /**
     * Tries to find an entity using its Id / Primary Key
     * @params req, res
     * @return entity
     */
    findById(req, res) {
        let id = req.params.id;

        this.songDao.findById(id)
            .then(this.common.findSuccess(res))
            .catch(this.common.findError(res));
    };

    /**
     * Finds all entities.
     * @return all entities
     */
    findAll(res) {
        this.songDao.findAll()
            .then(this.common.findSuccess(res))
            .catch(this.common.findError(res));
    };

    /**
     * Counts all the records present in the database
     * @return count
     */
    countAll(res) {

        this.songDao.countAll()
            .then(this.common.findSuccess(res))
            .catch(this.common.serverError(res));
    };

    /**
     * Updates the given entity in the database
     * @params req, res
     * @return true if the entity has been updated, false if not found and not updated
     */
    update(req, res) {
        let song = new Song();
        song.songId = req.body.songId;
        song.title = req.body.title;
        song.themeId = req.body.themeId;
        song.poeticReferencePicture = req.body.poeticReferencePicture;
        song.songtext = req.body.songtext;
        song.themeContentRelated = req.body.themeContentRelated;
        song.themeDetailed = req.body.themeDetailed;
        song.rhymingScheme = req.body.rhymingScheme;
        song.chords = req.body.chords;
        song.songStateId = req.body.songStateId;

        return this.songDao.update(song)
            .then(this.common.editSuccess(res))
            .catch(this.common.serverError(res));
    };

    /**
     * Creates the given entity in the database
     * @params req, res
     * returns database insertion status
     */
    create(req, res) {
        let song = new Song();
        if (req.body.id) {
            song.songId = req.body.id;
        }

        song.title = req.body.title;
	      song.themeId = req.body.themeId;
        song.poeticReferencePicture = req.body.poeticReferencePicture;
        song.songtext = req.body.songtext;
        song.themeContentRelated = req.body.themeContentRelated;
        song.themeDetailed = req.body.themeDetailed;
        song.rhymingScheme = req.body.rhymingScheme;
        song.chords = req.body.chords;
        song.songStateId = req.body.songStateId;

        if (req.body.id) {
            return this.songDao.createWithId(song)
                .then(this.common.editSuccess(res))
                .catch(this.common.serverError(res));
        }
        else {
            return this.songDao.create(song)
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

        this.songDao.deleteById(id)
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

        this.songDao.exists(id)
            .then(this.common.existsSuccess(res))
            .catch(this.common.findError(res));
    };
}

module.exports = SongController;
