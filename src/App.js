import React from 'react';

import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [
              {
                id: 1,
                name: 'bulbasaur',
                types: ['poison', 'grass'],
                evolution: null,
                url:
                  'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png',
              },
              {
                id: 2,
                name: 'ivysaur',
                types: ['poison', 'grass'],
                evolution: 'bulbasaur',
                url:
                  'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png',
              },
              {
                id: 3,
                name: 'venusaur',
                types: ['poison', 'grass'],
                evolution: 'ivysaur',
                url:
                  'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/3.png',
              },
              {
                id: 4,
                name: 'charmander',
                types: ['fire'],
                evolution: null,
                url:
                  'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png',
              },
              {
                id: 5,
                name: 'charmeleon',
                types: ['fire'],
                evolution: 'charmander',
                url:
                  'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/5.png',
              },
              {
                id: 6,
                name: 'charizard',
                types: ['flying', 'fire'],
                evolution: 'charmeleon',
                url:
                  'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png',
              },
              {
                id: 7,
                name: 'squirtle',
                types: ['water'],
                evolution: null,
                url:
                  'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png',
              },
              {
                id: 8,
                name: 'wartortle',
                types: ['water'],
                evolution: 'squirtle',
                url:
                  'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/8.png',
              },
              {
                id: 9,
                name: 'blastoise',
                types: ['water'],
                evolution: 'wartortle',
                url:
                  'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/9.png',
              },
              {
                id: 10,
                name: 'caterpie',
                types: ['bug'],
                evolution: null,
                url:
                  'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10.png',
              },
            ]
    }
  }

  render() {
    return (
      <div className="app">
        <h1 className="app__title">Mi lista de Pokemon</h1>
        <ol className="pokemons">
          {this.state.data.map(item =>{
            return (
              <li className="pokemon" key={item.id}>
                <div className="card">
                  <h2 className="card__name">{item.name}</h2>
                  <img src={item.url} alt={item.name} className="card__img" />
                  <ul className="card__types">
                    {item.types.map((type, index) => {
                      return (
                        <li className="card__type" key={index}>
                          <div className="card__type-item">{type}</div>
                        </li>
                      );
                    })}
                  </ul>
                </div>  
              </li>
            );
          })}
        </ol>
      </div>
    );
  }
}

export default App;
