import React from 'react';
import { View, Text } from 'react-native';

const Squirtle1 = () => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <PokemonImage uri="https://pokeapi.co/api/v2/pokemon/squirtle/" />
    </View>
  );
};

export default Squirtle1;