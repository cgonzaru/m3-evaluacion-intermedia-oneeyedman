import React from 'react';
import PokeList from './components/PokeList';

import './App.css';

const ENDPOINT = 'https://raw.githubusercontent.com/Adalab/m3-evaluacion-intermedia-oneeyedman/componentbranch/pokemons.json';


class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: []
    };

    this.handlePokemon();
  }

  handlePokemon() {
    fetch(ENDPOINT)
      .then(response => response.json())
      .then(data => {
        this.setState({
          data: data
        });
      });
    
  }

  render() {
    return (
      <div className="app">
        <h1 className="app__title">Mi lista de Pokemon</h1>
        <PokeList 
          data={this.state.data}
        />
      </div>
    );
  }
}

export default App;
