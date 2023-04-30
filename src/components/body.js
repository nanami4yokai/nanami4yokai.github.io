import React, { useEffect, useState } from 'react';
import getPokemon from '../data/pokemon_data';
import Popup from './popup';
import './stylesheet_body.css';

const Body = () => {
    const [pokemons, setPokemons] = useState([]);
    const [selectedPage, setSelectedPage] = useState(0);
    const pokemonsPerPage = 15;

    useEffect(() => {
        getPokemon(getRandomIds())
            .then((pkmn) => {
                console.log(pkmn);
                setPokemons(pkmn);
            })
            .catch((error) => {
                console.error(error);
            });
    }, []);

    const getRandomIds = () => {
        const ids = [];
        const maxNumberOfPokemons = 99
        for (let i = 0; i < maxNumberOfPokemons; i++) {
            ids.push(i + 1);
        }
        return ids;
    }

    const showPokemons = () => {
        const startIndex = selectedPage * pokemonsPerPage;
        const endIndex = startIndex + pokemonsPerPage;

        return pokemons.slice(startIndex, endIndex).map((element) => (
            <div className="body" key={element.id}>
                {element && (
                    <div className="poke_card">
                        <div className="poke_card_info">
                            <div id="id">#{element.id}</div>
                            <h2 id="name">{element.name}</h2>
                            <Popup content={element} />
                        </div>
                        <div className="poke_card_img">
                            <img src={element.sprites.front_default} />
                        </div>
                    </div>
                )}
            </div>
        ));
    };

    const handleNextPage = () => {
        setSelectedPage((prevPage) => prevPage + 1);
    };

    const handlePrevPage = () => {
        setSelectedPage((prevPage) => prevPage - 1);
    };

    return (
        <div className="body">
            <button id="prev" onClick={handlePrevPage} disabled={selectedPage === 0}>Previous</button>
            {showPokemons()}
            <button id="next" onClick={handleNextPage} disabled={(selectedPage + 1) * pokemonsPerPage >= pokemons.length}>Next</button>
        </div>
    );
};

export default Body;

