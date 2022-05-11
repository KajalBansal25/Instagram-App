import React from 'react';
import {SafeAreaView, StyleSheet, ScrollView} from 'react-native';
import {Posts} from '../../data/posts';
import BottomTabs, { bottomTabIcons } from '../components/home/BottomTabs';
import Headers from '../components/home/Headers';
import Stories from '../components/home/Stories';
import Post from '../components/Post';

const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Headers />
      <Stories />
      <ScrollView>
        {Posts.map((post, index) => (
          <Post post={post} key={index} />
        ))}
      </ScrollView>
      <BottomTabs icons={bottomTabIcons} />
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'black',
    flex: 1,
  },
});
