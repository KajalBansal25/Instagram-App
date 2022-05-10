import React, {useEffect} from 'react';
import {isLogin} from '../util/auth';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import PreLoginStack from './preLogin';
import MyDrawer from './myDrawer';
import {View} from 'react-native';

const Stack = createNativeStackNavigator();

const CheckAuth = ({navigation}) => {
  useEffect(() => {
    isLogin().then(res => {
      if (res) {
        navigation.navigate('initialRoute');
      } else {
        navigation.navigate('preLoginStack');
      }
    });
  }, []);
  return <View />;
};

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{headerShown: false}}
        initialRouteName="auth">
        <Stack.Screen name="auth" component={CheckAuth} />
        <Stack.Screen name="initialRoute" component={MyDrawer} />
        <Stack.Screen name="preLoginStack" component={PreLoginStack} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
