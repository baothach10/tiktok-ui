//MongoDB
// const mongoose = require('mongoose');
// const Schema = mongoose.Schema;
// const AutoIncrement3 = require('mongoose-sequence')(mongoose);

// const playlistSchema = new Schema({
//     id: { type: Number, unique: true},
//     cover: { type: String, required: true },
//     title: { type: String, required: true },
//     post_ids: [{type: Number, required: true}],
// })

// playlistSchema.plugin(AutoIncrement3, {id:'playlist-increment', inc_field: 'id'});
// const Playlist = mongoose.model('playlists', playlistSchema);


const { DataTypes } = require('sequelize');
const db = require('../database.js');
const Post = require('./Posts.js');
const User = require('./Users.js');

const Playlist = db.define('Playlist', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    cover: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    tableName: 'playlists'
});

module.exports = Playlist;