const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const CommentSchema = new Schema({
  text: { type: String, required: true },
  timestamp: { type: Date, required: true },
  display_name: { type: String, required: true },
  post_id: { type: Schema.Types.ObjectId, ref: 'Post' },
});

// CommentSchema.virtual('formatted_timestamp').get(function () {

// });

module.exports = mongoose.model('User', CommentSchema);