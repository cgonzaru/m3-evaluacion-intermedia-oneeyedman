import React from 'react';
import PropTypes from 'prop-types';

const Pokemon = props => {
  return (
    <div className="card">
      <h2 className="card__name">{props.name}</h2>
      <img src={props.url} alt={props.name} className="card__img" />
      <ul className="card__types">
        {props.types.map((type, index) => {
          return (
            <li className="card__type" key={index}>
              <div className="card__type-item">{type}</div>
            </li>
          );
        })}
      </ul>
      {props.evolution && <div className="card__evolution">{props.evolution}</div>}
    </div> 
  );
};

Pokemon.propTypes = {
  name: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  evolution: PropTypes.string,
  types: PropTypes.arrayOf(PropTypes.string).isRequired
}

export default Pokemon;