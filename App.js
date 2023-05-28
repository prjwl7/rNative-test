import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Screen1 from './Screens/Screen1';
import Screen2 from './Screens/Screen2';
import Screen3 from './Screens/Screen3';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShadowVisible : false}}>
        <Stack.Screen name="Screen1" component={Screen1} options={{headerShown:false}}/>
        <Stack.Screen name="Screen2" component={Screen2} options={{headerShown:false}}/>
        <Stack.Screen name="Screen3" component={Screen3} options={{headerShown:false}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
