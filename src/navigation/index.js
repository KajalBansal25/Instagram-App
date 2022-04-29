import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from '../screens/Login';
import Signup from '../screens/Signup';
import Homepage from '../screens/Homepage';


const Stack = createNativeStackNavigator();

function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{headerShown: false}}
        initialRouteName="Login">
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Signup" component={Signup} />
        <Stack.Screen name="Homepage" component={Homepage} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AppNavigator;
