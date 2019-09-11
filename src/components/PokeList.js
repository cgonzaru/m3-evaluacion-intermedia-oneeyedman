import React from 'react';
import Pokemon from './Pokemon';
import PropTypes from 'prop-types';

class PokeList extends React.Component {
  render() {
    return (
      <ol className="pokemons">
        {this.props.data.map(item =>{
          return (
            <li className="pokemon" key={item.id}>
              <Pokemon
                name={item.name}
                url={item.url}
                evolution={item.evolution}
                types={item.types}
              /> 
            </li>
          );
        })}
      </ol>
    );
  }
}

PokeList.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired
}

export default PokeList;