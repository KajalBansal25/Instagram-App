import React from 'react';
import { StyleSheet, View} from 'react-native';
import IonIcon from 'react-native-vector-icons/Ionicons';


const NavFour = () => {
  return (
    <View style={styles.header}>
      <IonIcon name="play" size={30} color="black"  />
    </View>
  );
};

const styles = StyleSheet.create({
    header:{
alignItems:"center", 
margin:10,
   }
});
export default NavFour;
