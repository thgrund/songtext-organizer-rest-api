/* Load Song entity */
const Song = require('../model/song');

/* Load DAO Common functions */
const daoCommon = require('./commons/daoCommon');

/**
 * Song Data Access Object
 */
class SongDao {

    constructor() {
        this.common = new daoCommon();
    }

    /**
     * Tries to find an entity using its Id / Primary Key
     * @params id
     * @return entity
     */
    findById(id) {
        let sqlRequest = "SELECT id, themeId, title, poeticReferencePicture, songtext, themeContentRelated, themeDetailed, rhymingScheme, chords FROM song WHERE id=$id";
        let sqlParams = {$id: id};
        return this.common.findOne(sqlRequest, sqlParams).then(row =>
            new Song(row.id, row.themeId, row.title,
                row.poeticReferencePicture, row.songtext,
                row.themeContentRelated, row.themeDetailed,
                row.rhymingScheme, row.chords));
    };

    /**
     * Finds all entities.
     * @return all entities
     */
    findAll() {
        let sqlRequest = "SELECT * FROM song";
        return this.common.findAll(sqlRequest).then(rows => {
            let songs = [];
            for (const row of rows) {
                songs.push(new Song(row.id, row.themeId, row.title,
                    row.poeticReferencePicture, row.songtext,
                    row.themeContentRelated, row.themeDetailed, row.rhymingScheme, row.chords));
            }
            return songs;
        });
    };

    /**
     * Counts all the records present in the database
     * @return count
     */
    countAll() {
        let sqlRequest = "SELECT COUNT(*) AS count FROM song";
        return this.common.findOne(sqlRequest);
    };

    /**
     * Updates the given entity in the database
     * @params Song
     * @return true if the entity has been updated, false if not found and not updated
     */
    update(Song) {
        let sqlRequest = "UPDATE song SET " +
            "themeId=$themeId, " +
            "title=$title, " +
            "poeticReferencePicture=$poeticReferencePicture, " +
            "songtext=$songtext, " +
            "themeContentRelated=$themeContentRelated, " +
            "themeDetailed=$themeDetailed, " +
            "rhymingScheme=$rhymingScheme, " +
            "chords=$chords " +
            "WHERE id=$songId";

        let sqlParams = {
            $songId: Song.songId,
            $themeId: Song.themeId,
            $title: Song.title,
            $poeticReferencePicture: Song.poeticReferencePicture,
            $songtext: Song.songtext,
            $themeContentRelated: Song.themeContentRelated,
            $themeDetailed: Song.themeDetailed,
            $rhymingScheme: Song.rhymingScheme,
            $chords: Song.chords
        };
        return this.common.run(sqlRequest, sqlParams);
    };

    /**
     * Creates the given entity in the database
     * @params Song
     * returns database insertion status
     */
    create(Song) {
        let sqlRequest = "INSERT into song (themeId, title, poeticReferencePicture, songtext, themeContentRelated, themeDetailed, rhymingScheme, chords) " +
            "VALUES ($themeId, $title, $poeticReferencePicture, $songtext, $themeContentRelated, $themeDetailed, $rhymingScheme, $chords)";
        let sqlParams = {
          $themeId: Song.themeId,
          $title: Song.title,
          $poeticReferencePicture: Song.poeticReferencePicture,
          $songtext: Song.songtext,
          $themeContentRelated: Song.themeContentRelated,
          $themeDetailed: Song.themeDetailed,
          $rhymingScheme: Song.rhymingScheme,
          $chords: Song.chords

        };
        return this.common.run(sqlRequest, sqlParams);
    };

    /**
     * Creates the given entity with a provided in the database
     * @params Song
     * returns database insertion status
     */
    createWithId(Song) {
        let sqlRequest = "INSERT into song (id, themeId, title, poeticReferencePicture, songtext, themeContentRelated, themeDetailed, rhymingScheme, chords) " +
            "VALUES ($id, $themeId, $title, $poeticReferencePicture, $songtext, $themeContentRelated, $themeDetailed, $rhymingScheme, $chords)";
        let sqlParams = {
            $id: Song.id,
          $themeId: Song.themeId,
          $title: Song.title,
          $poeticReferencePicture: Song.poeticReferencePicture,
          $songtext: Song.songtext,
          $themeContentRelated: Song.themeContentRelated,
          $themeDetailed: Song.themeDetailed,
          $rhymingScheme: Song.rhymingScheme,
          $chords: Song.chords
        };
        return this.common.run(sqlRequest, sqlParams);
    };

    /**
     * Deletes an entity using its Id / Primary Key
     * @params id
     * returns database deletion status
     */
    deleteById(id) {
        let sqlRequest = "DELETE FROM song WHERE id=$id";
        let sqlParams = {$id: id};
        return this.common.run(sqlRequest, sqlParams);
    };

    /**
     * Returns true if an entity exists with the given Id / Primary Key
     * @params id
     * returns database entry existence status (true/false)
     */
    exists(id) {
        let sqlRequest = "SELECT (count(*) > 0) as found FROM song WHERE id=$id";
        let sqlParams = {$id: id};
        return this.common.existsOne(sqlRequest, sqlParams);
    };
}

module.exports = SongDao;
