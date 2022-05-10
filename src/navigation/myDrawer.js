import React from 'react';
import MainStack from './mainStack';
import Logout from '../util/Logout';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AsyncStorage from '@react-native-async-storage/async-storage';

import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';

const Drawer = createDrawerNavigator();

const MyDrawer = () => {
  let size = 20;
  return (
    <Drawer.Navigator
      initialRouteName="Home"
      screenOptions={{
        drawerActiveBackgroundColor: 'green',
        drawerInactiveTintColor: 'grey',
        drawerStyle: {
          paddingTop: 300,
        },
      }}
      drawerContent={props => {
        //   console.log(props,"props>>>.")
        return (
          <DrawerContentScrollView {...props}>
            <DrawerItemList {...props} />
            <DrawerItem
              label="Logout"
              style={{marginTop: 300}}
              onPress={() => {
                AsyncStorage.clear();
                props.navigation.navigate('Login');
              }}
              icon={({focused, size}) => (
                <Ionicons
                  name="md-log-out"
                  size={size}
                  style={{height: size, width: size}}
                  color={focused ? '#7cc' : '#ccc'}
                />
              )}
            />
          </DrawerContentScrollView>
        );
      }}>
      <Drawer.Screen
        name="Home"
        component={MainStack}
        options={{
          drawerIcon: ({focused, size}) => (
            <Ionicons
              name="md-home"
              size={size}
              color={focused ? '#7cc' : '#ccc'}
            />
          ),
        }}
      />
    </Drawer.Navigator>
  );
};
export default MyDrawer;
