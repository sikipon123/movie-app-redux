import React from "react";

export default function Ratingmovie(props) {
  let arr = [];
  for (let i = 0; i < 5; i++) {
    if (i < props.rate) {
      arr.push(<span>★</span>);
    } else {
      arr.push(<span>✩</span>);
    }
  }

  return <div className="movierate">{arr}</div>;
}
