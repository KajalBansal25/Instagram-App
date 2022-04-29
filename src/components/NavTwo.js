import React from 'react';
import {View, StyleSheet, TouchableOpacity, Text} from 'react-native';

const NavTwo = () => {
  return (
    <View>
      <TouchableOpacity style={styles.button}>
        <Text>Edit Profile</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    padding: 10,
    margin: 10,
    borderRadius: 5,
    borderWidth: 1,
  },
});

export default NavTwo;
