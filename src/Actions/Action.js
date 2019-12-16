import { ADD_MOVIE, REMOVE_MOVIE, EDIT_MOVIE } from "../Actions/Action-types";

export const addmovie = payload => ({
  type: ADD_MOVIE,
  payload
});

export const removemovie = id => ({
  type: REMOVE_MOVIE,
  payload: id
});

export const editmovie = payload => ({
  type: EDIT_MOVIE,
  payload
});


// export const movietrailer = id => ({
//   type: MOVIE_TRAILER,
//   payload: id
// });