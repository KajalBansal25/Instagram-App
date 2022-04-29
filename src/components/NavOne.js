import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

const NavOne = () => {
  return (
    <View style={styles.Header}>
      <View>
        <View style={styles.CircleShape} />
        <Text>username..</Text>
      </View>
      <View style={styles.headerRight}>
        <View style={styles.headerRightContent}>
          <Text>x</Text>
          <Text>Posts</Text>
        </View>
        <View style={styles.headerRightContent}>
          <Text>y</Text>
          <Text>Followers</Text>
        </View>
        <View style={styles.headerRightContent}>
          <Text>z</Text>
          <Text>Following</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  CircleShape: {
    width: 50,
    height: 50,
    borderRadius: 100 / 2,
    backgroundColor: '#FF9800',
  },
  Header: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    margin:10,
  },
  headerRight: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerRightContent: {
    paddingRight: 20,
  },
});

export default NavOne;
