import {Formik} from 'formik';
import React from 'react';
import * as yup from 'yup';

import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import CustomTextInput from '../components/customTextInput';

const axios = require('axios');

const Signup = ({navigation}) => {
  const schema = yup.object().shape({
    email: yup.string().email().required(),
    username: yup.string().required(),
    fullname: yup.string().required(),
    phone: yup.string().required().min(10).max(10),
    password: yup
      .string()
      .required('enter passsword')
      .min(5, 'Minimum 5 characters long'),
  });

  const save = async () => {
    try {
      await AsyncStorage.setItem('TOKEN4', 'kajal');
    } catch (error) {
      console.log('err in token>>>', error);
    }
  };

  return (
    <Formik
      initialValues={{
        email: '',
        username: '',
        fullname: '',
        phone: '',
        password: '',
      }}
      validationSchema={schema}
      onSubmit={values => {
        console.log('values', values);

        axios
          .post('http://192.10.3.23:8086/user/signup', values)
          .then(response => {
            console.log('response>>>signup>>>', response.config.data);
            navigation.navigate('Tabs');
            console.log(response.data);
            save();
          })
          .catch(error => {
            console.log('handle error>>>signup', error);
          });
      }}>
      {({handleChange, handleSubmit, values, errors, touched}) => (
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
              onChangeText={handleChange('email')}
              value={values.email}
            />
            {errors.email && touched.email && (
              <Text style={styles.errorText}>
                Entered email is invalid or empty
              </Text>
            )}
            <CustomTextInput
              placeholder="username"
              style={styles.input}
              autoCapitalize="none"
              autoCorrect={false}
              onChangeText={handleChange('username')}
              value={values.username}
            />
            {errors.username && touched.username && (
              <Text style={styles.errorText}>
                Entered username is invalid or empty
              </Text>
            )}

            <CustomTextInput
              placeholder="fullname"
              style={styles.input}
              autoCapitalize="none"
              autoCorrect={false}
              onChangeText={handleChange('fullname')}
              value={values.fullname}
            />
            {errors.fullname && touched.fullname && (
              <Text style={styles.errorText}>
                Entered fullname is invalid or empty
              </Text>
            )}

            <CustomTextInput
              placeholder="phone"
              style={styles.input}
              autoCapitalize="none"
              autoCorrect={false}
              onChangeText={handleChange('phone')}
              value={values.phone}
            />
            {errors.phone && touched.phone && (
              <Text style={styles.errorText}>
                Entered phone is invalid or empty
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
      )}
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
    padding: 10,
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
  },
  errorText: {
    color: 'red',
    marginLeft: 10,
  },
});
