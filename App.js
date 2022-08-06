/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import { Provider } from 'react-redux';
import { getPersistor } from '@rematch/persist';
import { StatusBar } from 'react-native';
import { PersistGate } from 'redux-persist/lib/integration/react';
import store from './src/application';
import Loader from './src/infrastructure/components/Loader';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Pokemon from './src/presentation/component/Pokemon';
import PokeDetails from './src/presentation/component/PokeDetails';

const Stack = createNativeStackNavigator();

function App() {

  return (
    <Provider store={store}>
      <PersistGate loading={<Loader loading />} persistor={getPersistor()}>
        <StatusBar barStyle="dark-content" backgroundColor="white" />
        <NavigationContainer>
          <Stack.Navigator initialRouteName="Pokemon"
            screenOptions={{
              headerShown: true,
            }}
          >
            <Stack.Screen name="Pokemon" component={Pokemon} />
            <Stack.Screen name="Pokemon Details" component={PokeDetails} />
            {/* <Stack.Screen name="PokemonDetail" component={PokemonDetail} /> */}
          </Stack.Navigator>
        </NavigationContainer>
        {/* <Pokemon /> */}
      </PersistGate>
    </Provider>
  );
}
export default App;