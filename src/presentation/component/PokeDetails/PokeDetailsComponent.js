import React, { useEffect } from 'react';
import { Text, SafeAreaView, FlatList } from 'react-native';
import { SvgUri } from 'react-native-svg';

function PokeDetailsComponent(props) {
    useEffect(() => {
        props.fetchPokemonDetails();
    }, [])
    return (
        <SvgUri
            width="100%"
            height="132"
            uri={props.pokemonDetails.sprites ? props.pokemonDetails.sprites.other.dream_world.front_default : ``}
        />
    );
}

export default PokeDetailsComponent;