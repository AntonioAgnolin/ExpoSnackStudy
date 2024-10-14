import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { AntDesign } from '@expo/vector-icons';
import { SimpleLineIcons } from '@expo/vector-icons';
import { MainStackNavigator, ToDoListStackNavigator } from './StackNavigator';

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{ headerShown: false }}
      barStyle={{ backgroundColor: '#694fad' }}>
      <Tab.Screen
        name="HomeScreen"
        options={{ title: 'Tab Squirtle',
        tabBarIcon: ({ color, size }) => (
            <AntDesign name="home" size={24} color="black" />
          ),  }}
        component={MainStackNavigator}
      />
      <Tab.Screen
        name="TodoListScreen"
        options={{ title: 'Tab Todo List',
        tabBarIcon: ({ color, size }) => (
            <SimpleLineIcons name="note" size={24} color="black" />
          ), }}
        component={ToDoListStackNavigator}
      />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
