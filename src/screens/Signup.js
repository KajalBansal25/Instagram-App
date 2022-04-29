import { Formik } from 'formik';
import React from 'react';

import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import CustomTextInput from '../components/customTextInput';

const Signup = ({navigation}) => {
  return (
    <Formik>
    <ScrollView contentContainerStyle={{flexGrow: 1}}>
      <View style={{backgroundColor: 'white', flex: 1}}>
        <Text style={styles.text}>
          Sign up to see photos and videos from your friends.
        </Text>
        <CustomTextInput
          placeholder="email"
          style={styles.input}
          autoCapitalize="none"
          autoCorrect={false}
          
        />
        <CustomTextInput
          placeholder="username"
          style={styles.input}
          autoCapitalize="none"
          autoCorrect={false}
        />
        <CustomTextInput
          placeholder="fullname"
          style={styles.input}
          autoCapitalize="none"
          autoCorrect={false}
        />
        <CustomTextInput
          placeholder="phone"
          style={styles.input}
          autoCapitalize="none"
          autoCorrect={false}
        />
        <CustomTextInput
          placeholder="password"
          style={styles.input}
          autoCapitalize="none"
          secureTextEntry={true}
        />
        <TouchableOpacity style={styles.inputTextOuter}>
          <Text style={styles.inputText}>Sign Up</Text>
        </TouchableOpacity>
        <Text style={styles.textChange}>Already have an account?</Text>
        <TouchableOpacity
          style={styles.inputTextOuter}
          onPress={() => navigation.navigate('Login')}>
          <Text style={styles.inputText}>Log In</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
    </Formik>
  );
};

export default Signup;

const styles = StyleSheet.create({
  text: {
    fontSize: 20,
    margin: 20,
  },
  input: {
    color: 'yellow',
    margin: 10,
    fontSize: 20,
  },
  button: {
    borderWidth: 1,
    padding: 10,
    margin: 10,
    borderRadius: 10,
  },
  inputText: {
    fontSize: 20,
    padding: 10,
  },
  textChange: {
    fontSize: 20,
    marginLeft: 100,
  },
  inputTextOuter: {
    margin: 10,
    borderRadius: 10,
    backgroundColor: 'skyblue',
    alignItems: 'center',
  },
});
