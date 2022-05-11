import React, {useEffect, useState} from 'react';
import {
  ScrollView,
  Text,
  View,
  FlatList,
  Image,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import Divider from 'react-native-divider';
import SinglePost from './SinglePost';

const axios = require('axios');

const PostFooterIcons = [
  {
    name: 'Like',
    imageUrl:
      'https://img.icons8.com/fluency-systems-regular/60/ffffff/like--v1.png',
    likedImageUrl: 'https://image.pngaaa.com/710/131710-middle.png',
  },
  {
    name: 'Comment',
    imageUrl:
      'https://cdn.iconscout.com/icon/free/png-256/comment-3251596-2724645.png',
  },
  {
    name: 'Share',
    imageUrl: 'https://cdn-icons-png.flaticon.com/512/5883/5883507.png',
  },
  {
    name: 'Save',
    imageUrl:
      'https://cdn.iconscout.com/icon/free/png-256/save-3244517-2701888.png',
  },
];
const Post = ({post}) => {
  return (
    <View style={{marginBottom: 30}}>
      <Divider />
      <PostHeader post={post} />
      <PostImage post={post} />
      <View style={{marginHorizontal: 15, marginTop: 10}}>
        <PostFooter />
        <Likes post={post} />
        <Caption post={post} />
        <CommentSection post={post} />
        <Comments post={post} />
      </View>
    </View>
  );
};

const PostHeader = ({post}) => (
  <View
    style={{
      flexDirection: 'row',
      margin: 5,
      justifyContent: 'space-between',
      alignItems: 'center',
    }}>
    <View style={{flexDirection: 'row', alignItems: 'center'}}>
      <Image source={{uri: post.profile_picture}} style={styles.story} />
      <Text style={{color: 'white', marginLeft: 5, fontWeight: 'bold'}}>
        {post.username}
      </Text>
    </View>
    <Text style={{color: 'white', fontWeight: 'bold'}}>...</Text>
  </View>
);

const PostImage = ({post}) => (
  <View style={{width: '100%', height: 350}}>
    <Image
      source={{uri: post.imageurl}}
      style={{height: '100%', resizeMode: 'cover'}}
    />
  </View>
);

const PostFooter = () => (
  <View style={{flexDirection: 'row'}}>
    <View style={styles.leftFooterIconsContainer}>
      <Icon imgStyle={styles.footerIcon} imgUrl={PostFooterIcons[0].imageUrl} />
      <Icon imgStyle={styles.footerIcon} imgUrl={PostFooterIcons[1].imageUrl} />
      <Icon imgStyle={styles.footerIcon} imgUrl={PostFooterIcons[2].imageUrl} />
    </View>
    <View style={{flex: 1, alignItems: 'flex-end'}}>
      <Icon imgStyle={styles.footerIcon} imgUrl={PostFooterIcons[3].imageUrl} />
    </View>
  </View>
);

const Icon = ({imgStyle, imgUrl}) => (
  <TouchableOpacity>
    <Image style={imgStyle} source={{uri: imgUrl}} />
  </TouchableOpacity>
);

const Likes = ({post}) => (
  <View style={{flexDirection: 'row', marginTop: 4}}>
    <Text style={{color: 'white', fontWeight: '600'}}>
      {post.likes.toLocaleString()} likes
    </Text>
  </View>
);

const Caption = ({post}) => (
  <View style={{marginTop: 5}}>
    <Text style={{color: 'white', fontWeight: '600'}}>
      <Text style={{fontWeight: '600'}}>{post.username}</Text>
      <Text> {post.caption}</Text>
    </Text>
  </View>
);

const CommentSection = ({post}) => (
  <View style={{marginTop: 5}}>
    {!!post.comments.length && (
      <Text style={{color: 'grey'}}>
        View {post.comments.length > 1 ? 'all' : ''} {post.comments.length}
        {post.comments.length > 1 ? ' comments' : ' comment'}
      </Text>
    )}
  </View>
);

const Comments = ({post}) => (
  <>
    {post.comments.map((comment, index) => (
      <View key={index} style={{flexDirection: 'row', marginTop: 5}}>
        <Text style={{color: 'white'}}>
          <Text style={{fontWeight: '600'}}>{comment.user}</Text>{' '}
          {comment.comment}
        </Text>
      </View>
    ))}
  </>
);

export default Post;

const styles = StyleSheet.create({
  story: {
    height: 35,
    width: 35,
    borderRadius: 50,
    marginLeft: 6,
    borderWidth: 1.6,
    borderColor: '#ff8501',
  },
  footerIcon: {
    width: 33,
    height: 33,
    tintColor: '#fff',
  },
  leftFooterIconsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '32%',
  },
});

// const Post = () => {
//   const [posts, setPosts] = useState([
//     {
//       id: 1,
//       name: 'kajal',
//     },
//     {id: 2, name: 'jyoti'},
//     {id: 3, name: 'taniya'},
//   ]);

//   const getPost = () => {
//     axios({
//       method: 'GET',
//       url: 'http://192.10.3.23:8086/post/getpost',
//     }).then(res => {
//       console.log('res.data>>>getting feed post>>>', res.data);
//       console.log('res>>>getting feed posts', res.status);
//       console.log(res.data.length);
//       if (res.status === 200) setPosts(res.data);
//       else if (res.status === 401 || res.status === 403) {
//         alert('u r unauthorized user hahaha');
//       }
//     });
//   };

//   useEffect(() => {
//     getPost();
//   }, []);

//   return (
//     <View>
//       <FlatList
//         data={posts}
//         renderItem={item => <SinglePost item={item} />}
//         keyExtractor={item => item.index}
//       />
//       {console.log('posts>>>', posts)}
//     </View>
//   );
// };

// export default Post;
