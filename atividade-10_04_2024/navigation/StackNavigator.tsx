import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import SquirtleScreen from '../screens/SquirtleScreen';
import PokemonScreen from '../screens/PokemonScreen';
import TodoListScreen from '../screens/TodoListScreen';
import { Button } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

const Stack = createStackNavigator();

const screenOptionStyle = {
  headerStyle: {
    backgroundColor: 'grey',
  },
  headerTintColor: 'white',
};

const MainStackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: '#007bff',
          justifyContent: 'center',
        },
        headerTintColor: 'white',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
        headerTitleAlign: 'center',
      }}>
      <Stack.Screen
        name="SquirtleScreen"
        component={SquirtleScreen}
        options={{ title: 'Squirtle' }}
      />
      <Stack.Screen
        name="PokemonScreen"
        component={PokemonScreen}
        options={({ route }) => ({ title: route.params.pokemon })}
      />
    </Stack.Navigator>
  );
};

const ToDoListStackNavigator = () => {
  return (
<Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen
        name="TodoListScreen"
        options={{ 
          title: 'Todo List',
          headerRight: () => (
            <Button
              onPress={() => alert('This is a button!')}
              title="Info"
              color="#FFF"
              icon={ <AntDesign name="pluscircleo" size={24} color="black" /> }
              style={{ marginRight: 10 }}
            />
          ), 
        }}
        component={TodoListScreen}
      />
    </Stack.Navigator>
  );
};

export { MainStackNavigator, ToDoListStackNavigator };
