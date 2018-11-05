/* Load modules */
let sqlite3 = require('sqlite3').verbose();

/*
 * Database configuration
 */

/* Load database file (Creates file if not exists) */
let db = new sqlite3.Database('./sqlite.db');

/* Init car and driver tables if they don't exist */
let init = function () {

db.run("CREATE TABLE if not exists car (" +
        "id INTEGER PRIMARY KEY AUTOINCREMENT," +
        " maker TEXT," +
        " model TEXT," +
        " year INT," +
        " driver INT" +
        ")");

    db.run("CREATE TABLE if not exists driver (" +
        "id INTEGER PRIMARY KEY AUTOINCREMENT," +
        " firstName TEXT," +
        " lastName TEXT," +
        " car INT" +
        ")");

   db.run("CREATE TABLE if not exists song ( " +
      "id	INTEGER PRIMARY KEY AUTOINCREMENT," +
      "theme_id INTEGER," +
      "title TEXT," +
      "poetic_reference_picture TEXT," +
      "songtext TEXT," +
      "theme_content_related TEXT," +
      "theme_detailed	TEXT)" );

  db.run("CREATE TABLE if not exists theme ( " +
      "id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT UNIQUE, " +
      "themeGeneral TEXT)");
};

module.exports = {
    init: init,
    db: db
};

