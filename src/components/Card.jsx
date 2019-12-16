import React from "react";
import Ratingmovie from "./Ratingmovie";
import { removemovie } from "../Actions/Action";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import ConnectedModal from "./Modaledit";

const mapDispatchToProps = dispatch => ({
  removemovie: deletemovie => dispatch(removemovie(deletemovie))
});

function Card({ movie, removemovie }) {
  console.log(movie);
  return (
    <div className="box-vision">
      <img className="box-img" src={movie.img} alt="img" />
      <div className="reeditbtn">
        <button
          className="delete-btn btn btn-danger"
          id={movie.id}
          onClick={() => removemovie(movie.id)}
        >
          Delete
        </button>
        <ConnectedModal movie={movie} className="edit-btn" />
        <Link
          to={"/Trailer/" + movie.name}
          className="trailer-btn btn btn-secondary"
        >
          Trailer
        </Link>
      </div>
      <div className="division">
        <p>{movie.name}</p>
        <p>{movie.releasedate}</p>
        <Ratingmovie rate={movie.rate} />
      </div>
    </div>
  );
}

export default connect(null, mapDispatchToProps)(Card);
