import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Reel from '../screens/Reel';
import Like from '../screens/Like';
import Setting from '../screens/Setting';
import Find from '../screens/Find';
import {StyleSheet, View, Image, Text} from 'react-native';
import Post from '../components/Post';

const Tab = createBottomTabNavigator();
const Tabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarLabelStyle: {display: 'none'},
      }}
      initialRouteName="Home"
      style={styles.shadow}>
      <Tab.Screen
        name="HOME"
        component={Post}
        options={{
          tabBarIcon: ({focused}) => (
            <View>
              <Image
                source={{
                  uri: 'https://cdn1.vectorstock.com/i/1000x1000/59/95/home-icon-vector-19575995.jpg',
                }}
                resizeMode="contain"
                style={{
                  width: 40,
                  height: 40,
                }}
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="FIND"
        component={Find}
        options={{
          tabBarIcon: ({focused}) => (
            <View>
              <Image
                source={{
                  uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUZ9jXri0jdkqoApd3YFPPCOkIaTy0BqaGyA&usqp=CAU',
                }}
                resizeMode="contain"
                style={{
                  width: 30,
                  height: 30,
                }}
              />
            </View>
          ),
        }}
      />

      <Tab.Screen
        name="REEL"
        component={Reel}
        options={{
          tabBarIcon: ({focused}) => (
            <View>
              <Image
                source={{
                  uri: 'https://seeklogo.com/images/I/instagram-reels-logo-18CF7D9510-seeklogo.com.png',
                }}
                resizeMode="contain"
                style={{
                  width: 30,
                  height: 30,
                }}
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="SETTING"
        component={Setting}
        options={{
          tabBarIcon: ({focused}) => (
            <View>
              <Image
                source={{
                  uri: 'https://cdn5.vectorstock.com/i/1000x1000/44/54/settings-icon-vector-21894454.jpg',
                }}
                resizeMode="contain"
                style={{
                  width: 40,
                  height: 40,
                }}
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="LIKE"
        component={Like}
        options={{
          tabBarIcon: ({focused}) => (
            <View>
              <Image
                source={{
                  uri: 'https://cdn2.vectorstock.com/i/1000x1000/54/16/heart-icon-vector-23205416.jpg',
                }}
                resizeMode="contain"
                style={{
                  width: 40,
                  height: 40,
                  borderWidth: 2,
                }}
              />
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  shadow: {
    shadowColor: '#ddd',
    shadowOffset: {
      width: 8,
      height: 10,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 5,
  },
});
export default Tabs;
