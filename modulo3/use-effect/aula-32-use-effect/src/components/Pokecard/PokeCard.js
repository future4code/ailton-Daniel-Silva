import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";

export default function PokeCard(props) {

    const [pokemon, setPokemon] = useState({})

    useEffect(() => {
        
        const pegaPokemon = (pokemon) => {
            axios
                .get(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
                .then(response => {
                    setPokemon(response.data)
                })
                .catch(err => {
                    console.log(err);
                });
        }

        pegaPokemon(props.pokemon)
    }, [pokemon])


    return (
        <div>
            <p>{pokemon.name}</p>
            <p>{pokemon.weight}</p>
            {pokemon.types && <p>{pokemon.types[0].type.name}</p>}
            {pokemon.sprites && (
            <img src={pokemon.sprites.front_default} alt={pokemon.name} />
            )}
        </div>
    )
}