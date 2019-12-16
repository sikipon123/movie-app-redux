import React from "react";

function Ratingsearch(props) {
  return (
    <div className="searchstars">
      <span onClick={() => props.changeRate(0)}>
        {props.props[0] ? "★" : "✩"}
      </span>
      <span onClick={() => props.changeRate(1)}>
        {props.props[1] ? "★" : "✩"}
      </span>
      <span onClick={() => props.changeRate(2)}>
        {props.props[2] ? "★" : "✩"}
      </span>
      <span onClick={() => props.changeRate(3)}>
        {props.props[3] ? "★" : "✩"}
      </span>
      <span onClick={() => props.changeRate(4)}>
        {props.props[4] ? "★" : "✩"}
      </span>
    </div>
  );
}
export default Ratingsearch;
