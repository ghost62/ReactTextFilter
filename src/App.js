import React, { Component } from "react";
import "./App.css";
import { CardList } from "./components/card-list/card-list.component";
import SearchBox from "./components/search-box/search-box";

export class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      search: "",
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => this.setState({ monsters: users }));
  }

  render() {
    const { search, monsters } = this.state;
    const filteredMonster = monsters.filter((monster) =>
      monster.name.toLowerCase().includes(search.toLowerCase())
    );
    return (
      <div className="App">
        <h1>Monsters Rolodox</h1>
        <SearchBox
          placeholder="search monsters"
          handleChange={(e) => {
            this.setState({ search: e.target.value });
          }}
        />
        <CardList monsters={filteredMonster} />
      </div>
    );
  }
}

export default App;
