import React, {useEffect, useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from '../screens/Login';
import Signup from '../screens/Signup';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Tabs from './Tabs';
import Post from '../components/Post';

const Stack = createNativeStackNavigator();

function AppNavigator() {
  const [token, setToken] = useState('');

  const tokenHandler = async () => {
    const token1 = await AsyncStorage.getItem('TOKEN5');
    console.log('token', token1);
    setToken(token1);
  };

  useEffect(() => {
    tokenHandler();
  }, [token]);

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{headerShown: false}}
        initialRouteName={token.length >2? 'Login' : 'Tabs'}>
        <Stack.Screen name="Tabs" component={Tabs} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Signup" component={Signup} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AppNavigator;
