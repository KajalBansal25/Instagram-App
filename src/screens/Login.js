import React from 'react';
import CustomTextInput from '../components/customTextInput';

import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {Formik} from 'formik';

const Login = ({navigation}) => {
  return (
    <ScrollView>
      <Formik>
        <View>
          <Text style={styles.text}>Instagram</Text>
          <CustomTextInput
            placeholder="username"
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
            <Text style={styles.inputText}>Log In</Text>
          </TouchableOpacity>
          <Text style={styles.textChange}>Don't have an account?</Text>
          <TouchableOpacity
            style={styles.inputTextOuter}
            onPress={() => navigation.navigate('Signup')}>
            <Text style={styles.inputText}>Sign Up</Text>
          </TouchableOpacity>
        </View>
      </Formik>
    </ScrollView>
  );
};
export default Login;

const styles = StyleSheet.create({
  text: {
    fontSize: 40,
    marginLeft: 100,
    marginTop: 100,
    marginBottom: 20,
  },
  input: {
    color: 'black',
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
    padding: 15,
  },
});
