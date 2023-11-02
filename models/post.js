const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const PostSchema = new Schema({
  title: { type: String, required: true },
  text: { type: String, required: true },
  timestamp: { type: Date, required: true },
  author_id: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  isPublished: { type: Boolean, required: true },
});

// PostSchema.virtual('formatted_timestamp').get(function () {

// });

module.exports = mongoose.model('Post', PostSchema);
