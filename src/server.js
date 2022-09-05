// in this file we will be creating our server routing and api endpoints

import express from "express";
import mongoose from "mongoose";
require("./db/conn");
import MovieDetails from "./models/moviDitails";

const app = express();
const port = process.env.PORT || 5000;
app.use(express.json());

// create a new movie details
// create a POST request to create a new movie details
app.post("/add-movie", async (req, res) => {
  try {
    const addMovie = new MovieDetails(req.body);
    const insertMovie = await addMovie.save();
    res.status(201).send(insertMovie);
  } catch (error) {
    res.status(400).send(error);
  }
});
// get all movie details
// create a GET request to get all movie details
app.get("/get-all", async (req, res) => {
  try {
    const getAllMovie = await MovieDetails.find({});
    res.status(200).send(getAllMovie);
  } catch (error) {
    res.status(400).send(error);
  }
});
// get a single movie details
// create a GET request to get a single movie details
app.get("/get-single/:id", async (req, res) => {
  try {
    const _id = req.params.id;
    const getSingleMovie = await MovieDetails.findById(_id);
    if (!getSingleMovie) {
      return res.status(404).send();
    } else {
      res.status(200).send(getSingleMovie);
    }
  } catch (error) {
    res.status(500).send(error);
  }
});

// get-paginated?page={page}&size={size}
// add server side pagination
app.get("/get-paginated", async (req, res) => {
  try {
    let { page, size } = req.query;
    if (!page) {
      page = 1;
    }
    if (!size) {
      size = 10;
    }
    const limit = parseInt(size);
    const skip = (page - 1) * size;
    const movieDetails = await MovieDetails.find().limit(limit).skip(skip);
    res.status(200).send({
      page,
      size,
      movieDetails,
    });
  } catch (error) {
    res.status(500).send(error);
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
