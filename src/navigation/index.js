import React,{useEffect,useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from '../screens/Login';
import Signup from '../screens/Signup';
import Homepage from '../screens/Homepage';
import AsyncStorage from '@react-native-async-storage/async-storage';


const Stack = createNativeStackNavigator();

function AppNavigator() {
const [token,setToken]=useState(false)

const tokenHandler=async()=>{
  const token1= await AsyncStorage.getItem('TOKEN5')
  setToken(token1)


}

  useEffect(()=>{
    tokenHandler()
  },[])

  if (token!='kajal') {
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
  } else {
    return(
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{headerShown: false}}
        initialRouteName="Homepage">
        <Stack.Screen name="Homepage" component={Homepage} />
      </Stack.Navigator>
    </NavigationContainer>
    );
  }
}

export default AppNavigator;
