import React from 'react';
import {View, StyleSheet, TextInput} from 'react-native';

const CustomTextInput = props => {
  return (
    <View style={styles.textWrapper}>
      <TextInput {...props} sadas />
    </View>
  );
};

export default CustomTextInput;

const styles = StyleSheet.create({
  textWrapper: {
    borderColor: 'grey',
    borderWidth: 1,
    borderRadius: 10,
    margin: 10,
  },
});
