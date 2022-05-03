import React from 'react';
import {Text, Image, View,ScrollView} from 'react-native';
import SinglePost from './SinglePost';

const Post = () => {
  return (
    <ScrollView>
      <SinglePost />
      <SinglePost />
      <SinglePost />
      <SinglePost />
    </ScrollView>
  );
};

export default Post;
