import React, { Component } from "react";

class Searchbar extends Component {
  render() {
    return (
      <div className="movieapp">
        <div
          className="active-cyan-3 active-cyan-4 mb-4"
          className="searchinput"
        >
          <input
            className="form-control"
            type="text"
            placeholder="Search"
            aria-label="Search"
            onChange={e => {
              this.props.handelChange(e.target.value);
            }}
          />
        </div>
      </div>
    );
  }
}

export default Searchbar;
