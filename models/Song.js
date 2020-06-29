const { model, Schema } = require('mongoose')

const SongSchema = new Schema({
	title: String,
	album: String,
	artist: String,
	comment: String,
	public: Boolean,
})

module.exports = model('Song', SongSchema)
