const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const AutoIncrement2 = require('mongoose-sequence')(mongoose);

const userSchema = new Schema({
    id: { type: Number, unique: true },
    avatar: { type: String, required: true },
    nickname: { type: String, required: true },
    fullName: { type: String, required: true },
    checked: { type: Boolean, default: false },
    bio: { type: String, default: '' },
    link: { type: String, default: ''  },
    following: { type: Number, default: 0 },
    followers: { type: Number, default: 0 },
    likes: { type: Number, default: 0 },
    video_ids: [{type: Number, required: true}],
    playlist_ids: [{type: Number, required: true}],
})

userSchema.plugin(AutoIncrement2, { id: 'user-increment', inc_field: 'id' });
const User = mongoose.model('users', userSchema);

module.exports = User;