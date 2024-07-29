const mongoose = require("mongoose");
const timestamp = require("mongoose-timestamp");
const mongoosePaginate = require("mongoose-paginate");

const postSchema = new mongoose.Schema({
    title: {type: String, required: true},
    body: {type: String, required: true},
    body_title: {type: String, required: true},
    slug: {type: String, required: true, unique: true},
    image: {type: String, required: true},
    published: {type: Boolean, required: true, default: false},
    created_at: {type: Date, default: Date.now()},
    updated_at: {type: Date, default: Date.now()},
});
postSchema.plugin(mongoosePaginate, timestamp);

const Post = mongoose.model("Post", postSchema);
module.exports = Post;