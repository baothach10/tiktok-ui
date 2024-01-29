const Post = require('./Posts.js');
const User = require('./Users.js');
const Playlist = require('./Playlists.js');
const db = require('../database.js');
const { DataTypes } = require('sequelize');

// import Post from './Posts.js';
// import User from './Users.js';
// import Playlist from './Playlists.js';


User.hasMany(Post);
Post.belongsTo(User);

User.hasMany(Playlist);
Playlist.belongsTo(User)

Post.belongsToMany(Playlist, { through: 'PostPlaylists' })
Playlist.belongsToMany(Post, { through: 'PostPlaylists' })