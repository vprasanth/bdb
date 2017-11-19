const m = require('mongoose');
const Schema = m.Schema;

const bookmarkSchema = new Schema({
  name: { type: String, require: true },
  url: { type: String, require: true },
  description: String,
  createdAt: Date,
  updatedAt: Date
});

module.exports = m.model('Bookmark', bookmarkSchema);

