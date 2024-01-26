const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const AutoIncrement3 = require('mongoose-sequence')(mongoose);

const playlistSchema = new Schema({
    id: { type: Number, unique: true},
    cover: { type: String, required: true },
    title: { type: String, required: true },
    post_ids: [{type: Number, required: true}],
})

playlistSchema.plugin(AutoIncrement3, {id:'playlist-increment', inc_field: 'id'});
const Playlist = mongoose.model('playlists', playlistSchema);
module.exports = Playlist;