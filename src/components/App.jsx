import React, { Component } from "react";
import Card from "./Card";
import "isomorphic-fetch";
import "es6-promise";
import Logo from "./logo.png";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      cards: [],
      people: [],
      hasLoaded: false
    };
  }

  fetchInfo(url, id) {
    fetch(url)
      .then(response => {
        return response.json();
      })
      .then(myJson => {
        this.makeCards(myJson, id);
        //console.log(myJson)
      });
  }

  makeCards(myJson, id) {
    if (id === "films") {
      myJson.forEach(Element => {
        this.setState({
          cards: [
            ...this.state.cards,
            <Card
              key={this.state.cards.length}
              name={Element.title}
              desc={Element.description}
            />
          ]
        });
        //console.log(Element)
      });
    } else if (id === "people") {
      myJson.forEach(Element => {
        this.setState({
          cards: [
            ...this.state.cards,
            <Card
              className="col"
              key={this.state.cards.length}
              name={Element.name}
              desc={Element.age + ", " + Element.gender}
              prop={<p className="chirpbody text-center card-body text-secondarye">
                  <a href={Element.url} target="_blank" rel="noopener noreferrer">Details</a>
                  </p>}
              
            />
          ]
        });
        //console.log(Element)
      });
    }
  }

  handleClick(e, id) {
    e.preventDefault();
    this.setState({ hasLoaded: true });
    if (id === "films") {
      let url = "https://ghibliapi.herokuapp.com/films";
      this.fetchInfo(url, id);
    } else if (id === "people") {
      let url = "https://ghibliapi.herokuapp.com/people";
      this.fetchInfo(url, id);
    }
  }

  render() {
    if (this.state.hasLoaded === true) {
      return (
        <React.Fragment>
          <div className="d-flex justify-content-center">
            <div className="flex-column">{this.state.cards}</div>
          </div>
        </React.Fragment>
      );
    } else {
      return (
        <React.Fragment>
          <div className="d-flex justify-content-center">
            <img src={Logo} alt="" />
          </div>
          <div className="d-flex justify-content-center ">
            <button
              className="chirp-button btn btn-danger rounded mt-5"
              onClick={e => this.handleClick(e, "films")}
            >
              Load Films
            </button>
          </div>
          <div className="d-flex justify-content-center ">
            <button
              className="chirp-button btn btn-danger rounded mt-5"
              onClick={e => this.handleClick(e, "people")}
            >
              Load People
            </button>
          </div>
        </React.Fragment>
      );
    }
  }
}

export default App;
