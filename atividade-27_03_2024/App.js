import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Squirtle from './screens/Squirtle';
import TodoList from './screens/TodoList';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function SquirtleStack() {
  return(
    <Stack.Navigator headerMode="none">
      <Stack.Screen name="Squirtle" component={Squirtle} />
    </Stack.Navigator>
  );
}

function TodoListStack() {
  return(
    <Stack.Navigator headerMode="none">
      <Stack.Screen name="TodoList" component={TodoList} />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Squirtle" component={SquirtleStack} />
        <Tab.Screen name="Todo List" component={TodoListStack} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}