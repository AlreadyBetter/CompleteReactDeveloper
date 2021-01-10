import React, { Component } from "react";

import { CardList } from "./components/cardList/CardList";
import { SearchBox } from "./components/searchBox/SearchBox";

import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ships: [],
      searchField: "",
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => this.setState({ ships: users }));
  }

  handleChange = (e) => {
    this.setState({ searchField: e.target.value });
  };

  render() {
    const filteredShips = this.state.ships.filter((ship) =>
      ship.name.toLowerCase().includes(this.state.searchField.toLowerCase())
    );

    return (
      <div className="App">
        <SearchBox
          placeHolder="search for ships"
          handleChange={this.handleChange}
        />
        <CardList ships={filteredShips} />
      </div>
    );
  }
}

export default App;
