// MongoDB
// const mongoose = require('mongoose');
// const Schema = mongoose.Schema;
// const AutoIncrement1 = require('mongoose-sequence')(mongoose);
// const postSchema = new Schema({
//     id: { type: Number, unique: true},
//     user_id: {type: Number, required: true},
//     title: { type: String, required: true },
//     music: { type: String, default: ''},
//     video: { type: String, default: '' },
//     likes: { type: Number, default: 0 },
//     comments: { type: Number, default: 0 },
//     saved: { type: Number, default: 0 },
//     share: { type: Number, default: 0 },
//     views: { type: Number, default: 0 },
// })
// postSchema.plugin(AutoIncrement1, {id: 'post-increment', inc_field: 'id' });
// const Post = mongoose.model('posts', postSchema);


const { DataTypes } = require('sequelize');
const db = require('../database.js')
const User = require('./Users.js');
const Playlist = require('./Playlists.js');

const Post = db.define('Post', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false
    }, 
    music: {
        type: DataTypes.STRING,
        allowNull: true,
        defaultValue: ''
    },
    video: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    likes: {
        type: DataTypes.INTEGER,
        defaultValue: 0,
    },
    comments: {
        type: DataTypes.INTEGER,
        defaultValue: 0,
    },
    saved: {
        type: DataTypes.INTEGER,
        defaultValue: 0,
    },
    share: {
        type: DataTypes.INTEGER,
        defaultValue: 0,
    },
    views: {
        type: DataTypes.INTEGER,
        defaultValue: 0,
    }
}, {
    tableName: 'posts'
});

module.exports = Post;