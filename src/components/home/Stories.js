import React from 'react';
import {Text, View, ScrollView, Image, StyleSheet} from 'react-native';
import {Users} from '../../../data/users';

const Stories = () => {
  return (
    <View style={{marginBottom: 13}}>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        {Users.map((story, index) => (
          <View key={index} style={{alignItems: 'center'}}>
            <Image source={{uri: story.image}} style={styles.story} />
            <Text style={{color: 'white'}}>
              {story.user.length > 8
                ? story.user.slice(0, 7).toLowerCase() + '...'
                : story.user.toLowerCase()}
            </Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

export default Stories;

const styles = StyleSheet.create({
  story: {
    height: 70,
    width: 70,
    borderRadius: 50,
    marginLeft: 6,
    borderWidth: 3,
    borderColor: '#ff8501',
  },
});
