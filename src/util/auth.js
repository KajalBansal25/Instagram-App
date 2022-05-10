import AsyncStorage from '@react-native-async-storage/async-storage';

export const isLogin = async () => {
  const token = await AsyncStorage.getItem('TOKEN5');
  console.log('token', token);
  if (token) {
    return true;
  } else {
    return false;
  }
};
