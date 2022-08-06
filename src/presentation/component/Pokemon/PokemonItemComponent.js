import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Styles from './Styles';
import { useNavigation } from '@react-navigation/native';

const PokemonItemComponent = (props) => {
    const { odr } = props;
    const navigation = useNavigation();
    return (
        <TouchableOpacity
            onPress={() => { props.setPokemonName(props.name); navigation.navigate('Pokemon Details') }}
        >
            <View style={Styles.pokeItem}>
                <Text>{odr + 1}. {props.name}</Text>
            </View>
        </TouchableOpacity>
    );
}

export default PokemonItemComponent;