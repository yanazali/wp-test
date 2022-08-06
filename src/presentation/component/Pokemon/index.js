import React from 'react';
import { SafeAreaView } from 'react-native';
import PokemonListContainer from '../../container/Pokemon/PokemonListContainer';
import Styles from './Styles';

function PokeManagement() {
    return (
        <SafeAreaView style={Styles.container}>
            <PokemonListContainer />
        </SafeAreaView>
    );
}

export default PokeManagement;