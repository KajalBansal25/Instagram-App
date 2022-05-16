import React, {Component} from 'react';
import {Text, View, SafeAreaView} from 'react-native';
import AddNewPost from '../components/newPost/AddNewPost';

const NewPostScreen = () => {
  return (
    <SafeAreaView style={{backgroundColor: 'black', flex: 1}}>
      <AddNewPost />
    </SafeAreaView>
  );
};
export default NewPostScreen;
