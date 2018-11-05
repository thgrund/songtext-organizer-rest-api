/* Load Theme entity */
const Theme = require('../model/theme');

/* Load DAO Common functions */
const daoCommon = require('./commons/daoCommon');

/**
 * Theme Data Access Object
 */
class ThemeDao {

    constructor() {
        this.common = new daoCommon();
    }

    /**
     * Tries to find an entity using its Id / Primary Key
     * @params id
     * @return entity
     */
    findById(id) {
        let sqlRequest = "SELECT id, themeGeneral FROM theme WHERE id=$id";
        let sqlParams = {$id: id};
        return this.common.findOne(sqlRequest, sqlParams).then(row =>
            new Theme(row.id, row.themeGeneral));
    };

    /**
     * Finds all entities.
     * @return all entities
     */
    findAll() {
        let sqlRequest = "SELECT * FROM theme";
        return this.common.findAll(sqlRequest).then(rows => {
            let themes = [];
            for (const row of rows) {
                themes.push(new Theme(row.id, row.themeGeneral));
            }
            return themes;
        });
    };

    /**
     * Counts all the records present in the database
     * @return count
     */
    countAll() {
        let sqlRequest = "SELECT COUNT(*) AS count FROM theme";
        return this.common.findOne(sqlRequest);
    };

    /**
     * Updates the given entity in the database
     * @params Theme
     * @return true if the entity has been updated, false if not found and not updated
     */
    update(Theme) {
        let sqlRequest = "UPDATE theme SET " +
            "themeGeneral=$themeGeneral, " +
            "WHERE id=$id";

        let sqlParams = {
            $themeGeneral: Theme.themeGeneral,
            $id: Theme.id
        };
        return this.common.run(sqlRequest, sqlParams);
    };

    /**
     * Creates the given entity in the database
     * @params Theme
     * returns database insertion status
     */
    create(Theme) {
        let sqlRequest = "INSERT into theme (themeGeneral) " +
            "VALUES ($themeGeneral)";
        let sqlParams = {
          $themeGeneral: Theme.themeGeneral,
        };
        return this.common.run(sqlRequest, sqlParams);
    };

    /**
     * Creates the given entity with a provided in the database
     * @params Theme
     * returns database insertion status
     */
    createWithId(Theme) {
        let sqlRequest = "INSERT into theme (id, themeGeneral) " +
            "VALUES ($id, $themeGeneral)";
        let sqlParams = {
            $id: Theme.id,
            $themeGeneral: Theme.themeGeneral,
        };
        return this.common.run(sqlRequest, sqlParams);
    };

    /**
     * Deletes an entity using its Id / Primary Key
     * @params id
     * returns database deletion status
     */
    deleteById(id) {
        let sqlRequest = "DELETE FROM theme WHERE id=$id";
        let sqlParams = {$id: id};
        return this.common.run(sqlRequest, sqlParams);
    };

    /**
     * Returns true if an entity exists with the given Id / Primary Key
     * @params id
     * returns database entry existence status (true/false)
     */
    exists(id) {
        let sqlRequest = "SELECT (count(*) > 0) as found FROM theme WHERE id=$id";
        let sqlParams = {$id: id};
        return this.common.existsOne(sqlRequest, sqlParams);
    };
}

module.exports = ThemeDao;
