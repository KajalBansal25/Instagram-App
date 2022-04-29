import React from 'react';
import {Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

const HomeScreen = () => {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Home!</Text>
    </View>
  );
};

const SettingsScreen = () => {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Settings!</Text>
    </View>
  );
};

const Tab = createBottomTabNavigator();

const NavFive = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Search" component={SettingsScreen} />
        <Tab.Screen name="Video" component={SettingsScreen} />
        <Tab.Screen name="Like" component={SettingsScreen} />
        <Tab.Screen name="Profile" component={SettingsScreen} />

      </Tab.Navigator>
    </NavigationContainer>
  );
};
export default NavFive;
