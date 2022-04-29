import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

const NavThree = () => {
  return (
    <View style={styles.header}>
      <View>
        <View style={styles.CircleShape} />
        <Text>username..</Text>
      </View>
      <View>
        <View style={styles.CircleShape} />
        <Text>username..</Text>
      </View>
      <View>
        <View style={styles.CircleShape} />
        <Text>username..</Text>
      </View>
      <View>
        <View style={styles.CircleShape} />
        <Text>username..</Text>
      </View>
      <View>
        <View style={styles.CircleShape} />
        <Text>username..</Text>
      </View>
     
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent:"space-around",
    margin: 10,
  },
  CircleShape: {
    width: 50,
    height: 50,
    borderRadius: 100 / 2,
    backgroundColor: '#FF9800',
  },
});

export default NavThree;
