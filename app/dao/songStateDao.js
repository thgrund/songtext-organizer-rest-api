/* Load Theme entity */
const SongState = require('../model/songState');

/* Load DAO Common functions */
const daoCommon = require('./commons/daoCommon');

/**
 * Theme Data Access Object
 */
class SongStateDao {

    constructor() {
        this.common = new daoCommon();
    }

    /**
     * Tries to find an entity using its Id / Primary Key
     * @params id
     * @return entity
     */
    findById(id) {
        let sqlRequest = "SELECT id, state, `order` FROM songState WHERE id=$id";
        let sqlParams = {$id: id};
        return this.common.findOne(sqlRequest, sqlParams).then(row =>
            new SongState(row.id, row.state, row.order));
    };

    /**
     * Finds all entities.
     * @return all entities
     */
    findAll() {
        let sqlRequest = "SELECT id, state, `order` FROM songState ORDER BY `order`";
        return this.common.findAll(sqlRequest).then(rows => {
            let songStates = [];
            for (const row of rows) {
                songStates.push(new SongState(row.id, row.state, row.order));
            }
            return songStates;
        });
    };

    /**
     * Counts all the records present in the database
     * @return count
     */
    countAll() {
        let sqlRequest = "SELECT COUNT(*) AS count FROM songState";
        return this.common.findOne(sqlRequest);
    };

    /**
     * Returns true if an entity exists with the given Id / Primary Key
     * @params id
     * returns database entry existence status (true/false)
     */
    exists(id) {
        let sqlRequest = "SELECT (count(*) > 0) as found FROM songState WHERE id=$id";
        let sqlParams = {$id: id};
        return this.common.existsOne(sqlRequest, sqlParams);
    };
}

module.exports = SongStateDao;
