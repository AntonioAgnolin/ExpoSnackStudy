import React from 'react';
import { View, Text } from 'react-native';

const Wartortle2 = () => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <PokemonImage uri="https://pokeapi.co/api/v2/pokemon/wartortle/" />
    </View>
  );
};

export default Wartortle2;