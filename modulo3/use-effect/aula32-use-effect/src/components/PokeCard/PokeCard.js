import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";

const PokeCard = (props) => {
    const [pokemon, setPokemon] = useState({})

    useEffect(() => {
        pegaPokemon(props.pokeName)
    }, [])

    useEffect(() => {
        pegaPokemon(props.pokeName)
    }, [props.pokeName])


    const pegaPokemon = async (pokeName) => {
        try {
            const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokeName}`)
            setPokemon(response.data)
        } catch (err) {
            console.log(err)
        }
    }

    const pokemon2 = pokemon;

    return (
        <div>
            <p>{pokemon2.name}</p>
            <p>{pokemon2.weight} Kg</p>
            {pokemon2.types && <p>{pokemon2.types[0].type.name}</p>}
            {pokemon2.sprites && (
                <img src={pokemon2.sprites.front_default} alt={pokemon2.name} />
            )}
        </div>
    );
}

export default PokeCard;