import React from 'react';
import { SafeAreaView } from 'react-native';
import PokeDetailsContainer from '../../container/PokeDetails/PokeDetailsContainer';
import Styles from './Styles';

function PokeDetailsManagement() {
    return (
        <SafeAreaView style={Styles.container}>
            <PokeDetailsContainer />
        </SafeAreaView>
    );
}

export default PokeDetailsManagement;