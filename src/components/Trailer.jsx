import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

const mapStateToProps = state => ({
  movielist: state.movielist
});
const Trailer = props => {

  const movies = props.movielist.filter(el => {
    return el.name == props.match.params.movie;
  });

  return (
    <div className="trailer">
      <h1 className="trailer-title">{movies[0].name}</h1>
      <iframe
        title="trailer"
        width="1000"
        height="480"
        src={movies[0].trailer}
        frameBorder="0"
        allowFullScreen
        className="trailer-vid"
      />

      <Link to="/" className="back-btn btn btn-danger">
        Back
      </Link>
    </div>
  );
};

export default connect(mapStateToProps)(Trailer);


