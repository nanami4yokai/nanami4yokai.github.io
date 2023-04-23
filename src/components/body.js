import React, { useEffect, useState } from 'react';
import getPokemon from '../data/pokemon_data';
import './stylesheet_body.css'
import Popup from './popup';

const Body = () => {
    const [pokemons, setPokemons] = useState([]);

    useEffect(() => {
        getPokemon(["pikachu", "raichu", "bulbasaur", "ivysaur", "venusaur", "charmander", "charmeleon", "charizard", "squirtle", "wartortle", "blastoise"])
            .then((pkmn) => {
                console.log(pkmn);
                setPokemons(pkmn);
            })
            .catch((error) => {
                console.error(error);
            });
    }, []);

    const showPokemons = () => {
        return pokemons.map(element => (
            <div className="body" key={element.id}>
                {element && (
                    <div className="poke_card">
                        <div className="poke_card_info">
                            <div id="id">#{element.id}</div>
                            <h2 id="name">{element.name}</h2>
                            <Popup content={element}/>
                        </div>
                        <div className="poke_card_img">
                            <img src={element.sprites.front_default} />
                        </div>
                    </div>
                )}
            </div>
        ));
    }

    return (
        <div className="body">
            {showPokemons()}
        </div>
    );
}

export default Body;
