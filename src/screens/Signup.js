import {Formik} from 'formik';
import React, {useState} from 'react';

import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import CustomTextInput from '../components/customTextInput';

const Signup = ({navigation}) => {
  const [signupData, setSignupData] = useState({
    email: '',
    username: '',
    fullname: '',
    phone: '',
    password: '',
  });

  const credentialsHandler = (field, value) => {
    setSignupData({...signupData, [field]: value});
    console.log(signupData);
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

      onSubmit={values => {
        console.log('values', values);
      }}>
      {({handleChange, handleSubmit, values}) => (
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
            <CustomTextInput
              placeholder="username"
              style={styles.input}
              autoCapitalize="none"
              autoCorrect={false}
              onChangeText={handleChange('username')}
              value={values.username}
            />
            <CustomTextInput
              placeholder="fullname"
              style={styles.input}
              autoCapitalize="none"
              autoCorrect={false}
              onChangeText={handleChange('fullname')}
              value={values.fullname}
            />
            <CustomTextInput
              placeholder="phone"
              style={styles.input}
              autoCapitalize="none"
              autoCorrect={false}
              onChangeText={handleChange('phone')}
              value={values.phone}
            />
            <CustomTextInput
              placeholder="password"
              style={styles.input}
              autoCapitalize="none"
              secureTextEntry={true}
              onChangeText={handleChange('password')}
              value={values.password}
            />
            <TouchableOpacity style={styles.inputTextOuter} onPress={handleSubmit}>
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

