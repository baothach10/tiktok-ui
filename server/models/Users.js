// MongoDB
// const mongoose = require('mongoose');
// const Schema = mongoose.Schema;
// const AutoIncrement2 = require('mongoose-sequence')(mongoose);
// const userSchema = new Schema({
//     id: { type: Number, unique: true },
//     avatar: { type: String, required: true },
//     nickname: { type: String, required: true },
//     fullName: { type: String, required: true },
//     checked: { type: Boolean, default: false },
//     bio: { type: String, default: '' },
//     link: { type: String, default: ''  },
//     following: { type: Number, default: 0 },
//     followers: { type: Number, default: 0 },
//     likes: { type: Number, default: 0 },
//     video_ids: [{type: Number, required: true}],
//     playlist_ids: [{type: Number, required: true}],
// })
// userSchema.plugin(AutoIncrement2, { id: 'user-increment', inc_field: 'id' });
// const User = mongoose.model('users', userSchema);

const { DataTypes } = require('sequelize');
const db = require('../database.js')
const Post = require('./Posts.js');
const Playlist = require('./Playlists.js');

const User = db.define('User', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    avatar: {
        type: DataTypes.STRING,
        defaultValue: 'server/public/assets/images/placeholder-user.png'
    },
    nickname: {
        type: DataTypes.STRING,
        allowNull: false
    }, 
    fullName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    checked: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
    },
    following: {
        type: DataTypes.INTEGER,
        defaultValue: 0,
    },
    followers: {
        type: DataTypes.INTEGER,
        defaultValue: 0,
    },
    likes: {
        type: DataTypes.INTEGER,
        defaultValue: 0,
    },
    bio: {
        type: DataTypes.STRING,
        allowNull: true
    },
    link: {
        type: DataTypes.STRING,
        allowNull: true
    }
}, {
    tableName: 'users'
});



module.exports = User;