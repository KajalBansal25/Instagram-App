import React from 'react';
import CustomTextInput from '../components/customTextInput';
import AsyncStorage from '@react-native-async-storage/async-storage';

import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {Formik} from 'formik';
import * as yup from 'yup';

const axios = require('axios');

const Login = ({navigation}) => {
  const schema = yup.object().shape({
    email: yup.string().email().required(),
    password: yup
      .string()
      .required('enter passsword')
      .min(5, 'Minimum 5 characters long'),
  });

  const save = async () => {
    try {
      await AsyncStorage.setItem('TOKEN5', 'kajal');
    } catch (error) {
      console.log('err in token>>>', error);
    }
  };
  return (
    <Formik
      initialValues={{
        email: '',
        password: '',
      }}
      validationSchema={schema}
      onSubmit={values => {
        console.log('values', values);

        axios
          .post('http://192.10.3.23:8086/user/login', values)
          .then(response => {
            console.log('response of login>>>', response?.data?.success);
            response?.data?.success == true
              ? navigation.navigate('Tabs')
              : null;
            if (response?.data?.success) {
              save();
            }
          })
          .catch(error => {
            console.log('error>>>login>>>', error);
          });
      }}>
      {({handleChange, handleSubmit, values, errors, touched}) => (
        <ScrollView>
          <View>
            <Text style={styles.text}>Instagram</Text>
            <CustomTextInput
              placeholder="email"
              style={styles.input}
              autoCapitalize="none"
              autoCorrect={false}
              onChangeText={handleChange('email')}
              value={values.email}
            />
            {errors.email && touched.email && (
              <Text style={styles.errorText}>
                Entered email is invalid or empty
              </Text>
            )}

            <CustomTextInput
              placeholder="password"
              style={styles.input}
              autoCapitalize="none"
              secureTextEntry={true}
              onChangeText={handleChange('password')}
              value={values.password}
            />
            {errors.password && touched.password && (
              <Text style={styles.errorText}>
                Entered password is weak or empty
              </Text>
            )}

            <TouchableOpacity
              style={styles.inputTextOuter}
              onPress={handleSubmit}>
              <Text style={styles.inputText}>Log In</Text>
            </TouchableOpacity>
            <Text style={styles.textChange}>Don't have an account?</Text>
            <TouchableOpacity
              style={styles.inputTextOuter}
              onPress={() => navigation.navigate('Signup')}>
              <Text style={styles.inputText}>Sign Up</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      )}
    </Formik>
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
    color: 'blue',
  },
  textChange: {
    fontSize: 20,
    marginLeft: 100,
  },
  inputTextOuter: {
    margin: 10,
    borderRadius: 10,
    alignItems: 'center',
    padding: 15,
  },
  errorText: {
    color: 'red',
    marginLeft: 10,
  },
});
