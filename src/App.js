import React, { Component } from "react";

import { CardList } from "./components/cardList/CardList";
import { SearchBox } from "./components/searchBox/SearchBox";

import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mosters: [],
      searchField: "",
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => this.setState({ mosters: users }));
  }

  handleChange = (e) => {
    this.setState({ searchField: e.target.value });
  };

  render() {
    const filteredMosters = this.state.mosters.filter((moster) =>
      moster.name.toLowerCase().includes(this.state.searchField.toLowerCase())
    );

    return (
      <div className="App">
        <SearchBox
          placeHolder="search for mosters"
          handleChange={this.handleChange}
        />
        <CardList mosters={filteredMosters} />
      </div>
    );
  }
}

export default App;
