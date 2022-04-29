import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';

const Nav = () => {
  return (
    <View style={styles.navstyle}>
      <View style={styles.navstyleOne}>
        <Text>Kajal</Text>
      </View>
      <View style={styles.navstyleTwo}>
        <Text>jyoti</Text>
      </View>
      <View style={styles.navstyleThree}>
        <Text>taniya</Text>
      </View>
      <View style={styles.navstyleFour}>
        <Text>shivang</Text>
      </View>
      <View style={styles.navstyleFive}>
        <Text>kajaljyoti</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  navstyle: {
    backgroundColor: 'yellow',
    flex: 1,
  },
  navstyleOne: {
    backgroundColor: 'green',
  },
  navstyleTwo: {
    backgroundColor: 'black',
  },
  navstyleThree: {
    backgroundColor: 'red',
  },
  navstyleFour: {
    backgroundColor: 'blue',
  },
  navstyleFive: {
    backgroundColor: 'orange',
  },
});

export default Nav;
