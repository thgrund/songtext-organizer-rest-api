/**
 * Driver Entity (ES6 Class)
 */

class Song {
    constructor(songId, themeId, title, poeticReferencePicture, songtext, themeContentRelated, themeDetailed, rhymingScheme, chords) {
      this.songId = songId;
      this.themeId = themeId;
      this.title = title;
      this.poeticReferencePicture = poeticReferencePicture;
      this.songtext = songtext;
      this.themeContentRelated = themeContentRelated;
      this.themeDetailed = themeDetailed;
      this.rhymingScheme = rhymingScheme;
      this.chords = chords;
    }
}

module.exports = Song;