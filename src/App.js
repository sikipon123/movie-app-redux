import React, { Component } from "react";
import "./App.css";
import Searchbar from "./components/Searchbar";
import Movies from "./components/Movies";
import Ratingsearch from "./components/Ratingsearch";
import ModalComp from "./components/Modal";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Trailer from "./components/Trailer";

class App extends Component {
  state = {
    stars: [false, false, false, false, false],
    input: "",
    shinystar: 0,
    isLoading: true
  };

  handelChange = newval => {
    this.setState({
      input: newval
    });
  };

  changeRate = starIndex => {
    let arr = this.state.stars;
    for (let i = 0; i <= 4; i++) {
      if (i <= starIndex) {
        arr[i] = true;
      } else {
        arr[i] = false;
      }
      this.setState({ shinystar: starIndex + 1 });
    }

    this.setState({
      stars: arr
    });
  };

  render() {
    console.log("frpm app ", this.props);
    console.log("this.props.pathindex", this.props.pathindex);
    return (
      <div className="App">
        <div className="maj">
          <BrowserRouter>
            <Searchbar handelChange={this.handelChange} />
            <Ratingsearch
              props={this.state.stars}
              changeRate={this.changeRate}
            />

            <Switch>
              <Route
                exact
                path="/"
                render={() => (
                  <Movies
                    // movielist={this.state.movielist}
                    input={this.state.input}
                    shinystar={this.state.shinystar}
                    isLoading={this.state.isLoading}
                  />
                )}
              />

              <Route exact path="/Trailer/:movie" component={Trailer} />
            </Switch>
          </BrowserRouter>
          <ModalComp />
        </div>
      </div>
    );
  }
}

export default App;
