import React from 'react';
import {Text, View, Image, TouchableOpacity, StyleSheet} from 'react-native';

const AddNewPost = () => {
  return (
    <View style={styles.container}>
      <Header />
    </View>
  );
};

const Header = () => (
  <View style={styles.headerContainer}>
    <TouchableOpacity>
      <Image
        source={{uri: 'https://img.icons8.com/ios-glyphs/90/ffffff/back.png'}}
        style={{height: 30, width: 30, tintColor: 'white'}}
      />
    </TouchableOpacity>
    <Text style={styles.headerText}> New Post</Text>
    <Text></Text>
  </View>
);

export default AddNewPost;

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 10,
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  headerText: {
      color:"#fff",fontWeight:"600",fontSize:20,
      marginLeft:25,
  },
});
