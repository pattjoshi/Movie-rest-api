// DEFIND SCHEMA FROM MOVIE DETAILS
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const movieDetailsSchema = new Schema({
  movieName: {
    type: String,
    required: true,
    unique: true,
  },
  movieDescription: {
    type: String,
    required: true,
  },
  movieRating: {
    type: Number,
    default: 0,
  },
  movieReleaseDate: {
    type: String,
    default: "1999-01-01",
  },
  movieCast: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("MovieDetails", movieDetailsSchema);
