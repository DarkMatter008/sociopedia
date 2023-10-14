const mongoose = require("mongoose");

const postSchema = mongoose.Schema(
  {
    userId: { type: String, required: true },
    firstName: String,
    lastName: String,
    desc: String,
    likes: [],
    image: String,
    video: String,
  },
  {
    timestamps: true,
  }
);

var PostModel = mongoose.model("Posts", postSchema);
module.exports = PostModel;