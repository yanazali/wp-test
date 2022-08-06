import React, { useEffect } from 'react';
import { Text, SafeAreaView, FlatList, TextInput } from 'react-native';
import PokemonItemContainer from '../../container/Pokemon/PokemonItemContainer';
import Styles from './Styles';

function PokemonListComponent(props) {
    useEffect(() => {
        props.fetchPokemonList();
        props.setPokemonSearch();
        props.fetchPokemonListSearch();
    }, [])
    return (
        <>
            <TextInput
                placeholder="Cari Pokemon"
                placeholderTextColor={`gray`}
                keyboardShouldPersistTaps
                style={Styles.input}
                onChangeText={text => props.setPokemonSearch(text)}
                onSubmitEditing={() => props.fetchPokemonListSearch()}
            />

            <FlatList
                data={props.pokemonList}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item, index }) =>
                    <PokemonItemContainer
                        {...item} odr={index}
                    />}
                onEndReached={() => props.fetchPokemonList()}
                onEndReachedThreshold={0.5}
            />
        </>
    );
}

export default PokemonListComponent;