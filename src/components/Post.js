import React, {useEffect, useState} from 'react';
import {ScrollView, Text, View, FlatList} from 'react-native';
import {render} from 'react-native/Libraries/Renderer/implementations/ReactNativeRenderer-prod';
import SinglePost from './SinglePost';

const axios = require('axios');

const Post = () => {
  const [posts, setPosts] = useState([]);

  const getPost = () => {
    axios({
      method: 'GET',
      url: 'http://192.10.3.23:8086/post/getpost',
    }).then(res => {
      console.log('res.data>>>getting feed post>>>', res.data);
      console.log('res>>>getting feed posts', res.status);
      console.log(res.data.length);
      if (res.status === 200) setPosts(res.data);
      else if (res.status === 401 || res.status === 403) {
        alert('u r unauthorized user hahaha');
      }
    });
  };

  useEffect(() => {
    getPost();
  }, []);

  return (
    <View  >
      <FlatList
        data={posts}
        renderItem={item => <SinglePost item={item} />}
        keyExtractor={item => item.index}
      />
    </View>
  );
};

export default Post;
