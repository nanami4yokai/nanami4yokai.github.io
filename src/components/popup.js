import React, { useState } from 'react';
import './stylesheet_modal.css'

export default function Popup(props) {
    const [isPopupOpen, setIsPopupOpen] = useState(false);

    const handleDivClick = () => {
        setIsPopupOpen(!isPopupOpen);
    };

    return (
        <>
            <button id='button' onClick={handleDivClick}>more</button>
            {isPopupOpen && (
                <div className="modal">
                    <div className="modal-content">
                        <div id='intro'>
                            <div id='name'>{props.content.name}</div>
                            <div id='stat'>{props.content.stats[0].stat.name}{props.content.stats[0].base_stat}</div>
                        </div>
                        <img id='image'src={props.content.sprites.front_default}></img>
                        <br/>
                        <br/>
                        <div id='details'>
                            <div id='type'><b>Type: </b>{props.content.types[0].type.name}</div>
                            <div id='ability'><b>Abilities: </b>{props.content.abilities[0].ability.name}</div>
                            <div id='atk'><b>Attack: </b>{props.content.stats[1].base_stat}</div>
                            <div id='def'><b>Defense: </b>{props.content.stats[2].base_stat}</div>
                            <div id='speed'><b>Speed: </b>{props.content.stats[5].base_stat}</div>
                        </div>
                        <br /><br />
                        <button id='button' onClick={handleDivClick}>close</button>
                    </div>
                </div>
            )}
        </>
    );
}



