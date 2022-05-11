import React, {useState} from 'react';
import {Text, View, StyleSheet, TouchableOpacity, Image} from 'react-native';
import Divider from 'react-native-divider';

export const bottomTabIcons = [
  {
    name: 'Home',
    active: 'https://img.icons8.com/fluency-systems-filled/144/ffffff/home.png',
    inactive:
      'https://img.icons8.com/fluency-systems-regular/48/ffffff/home.png',
  },
  {
    name: 'Search',
    active: 'https://img.icons8.com/ios-filled/500/ffffff/search--v1.png',
    inactive: 'https://img.icons8.com/ios/500/ffffff/search--v1.png',
  },
  {
    name: 'Reels',
    active: 'https://img.icons8.com/ios-filled/50/ffffff/instagram-reel.png',
    inactive: 'https://img.icons8.com/ios/500/ffffff/instagram-reel.png',
  },
  {
    name: 'Shop',
    active:
      'https://img.icons8.com/fluency-systems-filled/48/ffffff/shopping-bag-full.png',
    inactive:
      'https://img.icons8.com/fluency-systems-regular/48/ffffff/shopping-bag-full.png',
  },
  {
    name: 'Profile',
    active:
      'https://i.picsum.photos/id/1071/200/300.jpg?hmac=y09-AL4WisOkuQR4SOKzDWjPHWptbCDbEaFP0yJkKNY',
    inactive:
      'https://i.picsum.photos/id/1071/200/300.jpg?hmac=y09-AL4WisOkuQR4SOKzDWjPHWptbCDbEaFP0yJkKNY',
  },
];

const BottomTabs = ({icons}) => {
  const [activeTab, setActiveTab] = useState('Home');

  const Icon = ({icon}) => (
    <TouchableOpacity onPress={() => setActiveTab(icon.name)}>
      <Image
        source={{uri: activeTab === icon.name ? icon.active : icon.inactive}}
        style={[styles.icon,icon.name==="Profile"?styles.profilePic():null]}
      />
    </TouchableOpacity>
  );
  return (
    <View style={styles.wrapper}>
      <Divider />
      <View style={styles.container}>
        {icons.map((icon, index) => (
          <Icon key={index} icon={icon} />
        ))}
      </View>
    </View>
  );
};
export default BottomTabs;

const styles = StyleSheet.create({
  icon: {
    width: 30,
    height: 30,
  },
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    height: 50,
    paddingTop: 10,
  },
  wrapper: {
    position: 'absolute',
    width: '100%',
    bottom: '3%',
    zIndex: 11,
    backgroundColor: '#000',
    marginBottom:-30
  },
  profilePic:(activeTab="")=>({
    borderRadius:50,
    borderColor:"#fff",
    borderWidth:activeTab==="Profile"?2:0,
  })
});
