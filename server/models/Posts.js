const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const AutoIncrement1 = require('mongoose-sequence')(mongoose);

const postSchema = new Schema({
    id: { type: Number, unique: true},
    user_id: {type: Number, required: true},
    title: { type: String, required: true },
    music: { type: String, default: ''},
    video: { type: String, default: '' },
    likes: { type: Number, default: 0 },
    comments: { type: Number, default: 0 },
    saved: { type: Number, default: 0 },
    share: { type: Number, default: 0 },
    views: { type: Number, default: 0 },
    
})

postSchema.plugin(AutoIncrement1, {id: 'post-increment', inc_field: 'id' });
const Post = mongoose.model('posts', postSchema);
module.exports = Post;