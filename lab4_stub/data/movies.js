const mongoCollections = require('../config/mongoCollections');
const movies = mongoCollections.movies;
const {ObjectId} = require('mongodb');


const createMovie = async (
  title,
  plot,
  genres,
  rating,
  studio, 
  director,
  castMembers,
  dateReleased,
  runtime
) => {


  if(typeof title !== 'string' || title.trim() == ""|| title.trim().length <2 || title.match(/^[A-Za-z0-9]*$/)) 
  {
    throw "There's error in title";
  }
  if(typeof plot !== 'string' || plot.trim() == "") {
    throw "There's error in plot ";
  }
  if(typeof studio !== 'string' || studio.trim() == ""|| title.trim().length <5 || studio.match(/^[A-Za-z]*$/)) {
    throw "There's error in  studio ";
  }
  if(typeof director !== 'string' || string.split('').length <2 || director.trim() == ""|| director.match(/^[A-Za-z]*$/)) {
    throw "There's error in  director ";
  }
  if(typeof dateReleased !== 'string' || dateReleased.trim() == "") {
    throw "There's error in dateReleased ";
  }
  if(typeof runtime !== 'string' || runtime.trim() == "") {
    throw "There's error in  runtime ";
  }
  if(typeof genres.trim().length <5 || genres.match(/^[A-Za-z]*$/)) {
    throw "There's error in  genres";
  }
  if(typeof string.split('').length <2 || castMembers.trim().length <5 || castMembers.match(/^[A-Za-z]*$/)) {
    throw "There's error in  genres";
  }
  if(typeof dateReleased!== 'string') {
    throw "There's error in dateReleased";
  }

title =title.trim();
plot = plot.trim();
studio = studio.trim();
director = director.trim();
dateReleased = dateReleased.trim();
runtime = runtime.trim();
genres = genres.trim();
castMembers = castMembers.trim();





  if(arguments.length <=3 ) {
		throw new Error("All fields need to have  title, plot, genres, rating, studio, director, castMembers, dateReleased, runtime");
	}




if (!title) throw 'You must provide a title for your movie title';
if (typeof title !== 'string') throw 'title must be a string';
if (title.trim().length === 0) throw 'title cannot be an empty string or string with just spaces';
title = title.trim();

const moviesCollection = await movies();

let newMovie = {
  titile : title,
  plot : plot,
  genres : genres,
  rating : rating,
  studio : studio,
  director : director,
  castMembers : castMembers,
  dateReleased : dateReleased,
  runtime : runtime
  };

const insertInfo = await moviesCollection.insertOne(newMovie);
if (!insertInfo.acknowledged || !insertInfo.insertedId) throw 'Could not add movie';
const newId = insertInfo.insertedId.toString();
const movie = await getMovieById(newId);
return movie;

// const moviesCollection = await movies();
// const insertInfo = await moviesCollection.insertOne(newMovie);
// if (!insertInfo.acknowledged || !insertInfo.insertedId) throw 'Could not add movie';

};

const getAllMovies = async () => {
  const moviesCollection = await movies();
  const moviesList = await moviesCollection.find({}).toArray();
  if (!moviesList) throw 'Could not get all movies';
  return moviesList;
};

const getMovieById = async (id) => {
  if (!id) throw 'You must provide an id to search for';
    if (typeof id !== 'string') throw 'Id must be a string';
    if (id.trim().length === 0)
      throw 'Id cannot be an empty string or just spaces';
    id = id.trim();
    if (!ObjectId.isValid(id)) throw 'invalid object ID';
    const moviesCollection = await movies();
    const moviesconst = await moviesCollection.findOne({_id: ObjectId(id)});
    if (moviesconst === null) throw 'No movies with that id';
    return moviesconst;
};

const removeMovie = async (id) => {
    if (!id) throw 'You must provide an id to search for';
    if (typeof id !== 'string') throw 'Id must be a string';
    if (id.trim().length === 0) throw 'id cannot be an empty string or just spaces';
    id = id.trim();
    if (!ObjectId.isValid(id)) throw 'invalid object ID';

    const moviesCollection = await movies();
    const moviesvar = await moviesCollection.findOne({_id: ObjectId(id)});
    const deletionInfo = await moviesCollection.deleteOne({_id: ObjectId(id)});

    if (deletionInfo.deletedCount === 0) 
    {
     throw `Could not delete movies with id of ${id}`;
    }
    return `${moviesvar.titile} has been successfully deleted!`;
};

const renameMovie = async (id, newName) => {
    if (!id) throw 'You must provide an id to search for';
    if (typeof id !== 'string') throw 'Id must be a string';
    if (id.trim().length === 0)
      throw 'Id cannot be an empty string or just spaces';
    id = id.trim();
    if (!ObjectId.isValid(id)) throw 'invalid object ID';
    if (!newName) throw 'You must provide a new name for your movies';
    if (typeof newName !== 'string') throw 'New Name must be a string';
    if (newName.trim().length === 0)
      throw 'New Name cannot be an empty string or string with just spaces';
    
      newName = newName.trim();

    const moviesCollection = await movies();
    const updatedmovies = {
      newName : newName
    };

    const updatedInfo = await moviesCollection.updateOne(
      {_id: ObjectId(id)},
      {$set: updatedmovies}
    );
    if (updatedInfo.modifiedCount === 0) {
      throw 'could not rename movies successfully';
    }

    return await getMoviesById(id);
  };


module.exports = {
  createMovie, 
  getAllMovies, 
  getMovieById, 
  removeMovie, 
  renameMovie};
