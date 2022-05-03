import React from 'react';
import {Text,View,Image} from 'react-native';


const SinglePost = () => {
  return (
    <View>
      <View>
        <View style={{marginTop:10,marginLeft:10, flexDirection: 'row'}}>
          <Image
            source={{
              uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAhOwr9fr6rqgzh26aepIkZBrm0QsgbreexQ&usqp=CAU',
            }}
            resizeMode="contain"
            style={{
              width: 30,
              height: 30,
            }}
          />
          <Text style={{marginLeft: 20, marginTop: 5}}>static name</Text>
        </View>
        <View style={{borderWidth:1,margin:10,justifyContent:"center",alignItems:"center"}}>
          <Image
            source={{
              uri: 'https://cdn.pixabay.com/photo/2018/08/28/12/41/avatar-3637425_960_720.png',
            }}
            resizeMode="contain"
            style={{
              width: 350,
              height: 500,
            }}
          />
        </View>
        <View style={{flexDirection:"row" ,alignItems:"center"}}>
        <Image
            source={{
              uri: 'https://cdn2.vectorstock.com/i/1000x1000/54/16/heart-icon-vector-23205416.jpg',
            }}
            resizeMode="contain"
            style={{
              width: 30,
              height:30,
              marginHorizontal:5
            }}
          />
          <Image
            source={{
              uri: 'https://thetyee.ca/Culture/2019/11/05/CommentBubble1.jpg',
            }}
            resizeMode="contain"
            style={{
              width: 50,
              height: 50,
              marginHorizontal:5,
              

            }}
          />
          <Image
            source={{
              uri: 'https://www.freepnglogos.com/uploads/share-png/share-icon-png-image-purepng-transparent-png-37.png',
            }}
            resizeMode="contain"
            style={{
              width: 30,
              height: 30,
              marginHorizontal:5

            }}
          />
        </View>
      </View>
    </View>
  )
}

export default SinglePost
