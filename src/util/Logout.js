import AsyncStorage from '@react-native-async-storage/async-storage';
import React from 'react';
import {
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';

const Logout = ({navigation}) => {
  return (
    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props} />
      <DrawerItem
        label="Logout"
        style={{marginTop: 300}}
        onPress={() => {
          AsyncStorage.clear();
          navigation.navigate('Login');
        }}
        options={{
          drawerIcon: ({focused, size}) => (
            <Ionicons
              name="md-log-out"
              size={size}
              color={focused ? '#7cc' : '#ccc'}
            />
          ),
        }}
      />
    </DrawerContentScrollView>
  );
};

export default Logout;
