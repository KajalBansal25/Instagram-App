import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  Platform,
  PermissionsAndroid,
  TextInput,
} from 'react-native';
import {launchImageLibrary} from 'react-native-image-picker';
import axios from 'axios';

const Reel = () => {
  const [filePath, setFilePath] = useState({});
  const [caption, setCaption] = useState('');

  useEffect(() => {
    requestCameraPermission();
    requestExternalWritePermission();
  }, []);

  const formData = new FormData();

  const uploadImage = () => {
    console.log('file ka path>>> ', filePath);
    const image = {
      name: filePath.fileName,
      type: filePath.type,
      uri: filePath.uri,
    };

    formData.append('image', JSON.stringify(image));
    formData.append('name', 'kajal');

    axios({
      method: 'POST',
      url: 'http://192.10.3.23:8086/post/uploadpost',
      data: {formData},
      withCredentials: true,
      'Content-Type': 'application/x-www-form-urlencoded',
      Accept: 'application/json',
    })
      .then(res => {
        console.log('success>>', res.data);
        if (res.status === 200) {
        } else if (res.status === 401 || res.data === 403) {
          alert('u r unauthorized user hahahha hmm hnn');
          navigate('/login');
        }
      })
      .catch(err => {
        console.log('error in posting of the createnewpost', err);
      });
  };

  const requestCameraPermission = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.CAMERA,
        {
          title: 'Cool Photo App Camera Permission',
          message:
            'Cool Photo App needs access to your camera ' +
            'so you can take awesome pictures.',
          buttonNeutral: 'Ask Me Later',
          buttonNegative: 'Cancel',
          buttonPositive: 'OK',
        },
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        console.log('You can use the camera');
      } else {
        console.log('Camera permission denied');
      }
    } catch (err) {
      console.warn(err);
    }
  };

  const requestExternalWritePermission = async () => {
    if (Platform.OS === 'android') {
      try {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
          {
            title: 'External Storage Write Permission',
            message: 'App needs write permission',
          },
        );
        return granted === PermissionsAndroid.RESULTS.GRANTED;
      } catch (err) {
        console.warn(err);
        alert('Write permission err', err);
      }
      return false;
    } else return true;
  };

  const chooseFile = type => {
    let options = {
      mediaType: type,
      maxWidth: 300,
      maxHeight: 550,
      quality: 1,
      selectionLimit: 1,
      includeBase64: false,
    };

    launchImageLibrary(options, response => {
      console.log('Response in choosefile= ', response);

      if (response.didCancel) {
        alert('User cancelled camera picker');
        return;
      } else if (response.errorCode == 'camera_unavailable') {
        alert('Camera not available on device');
        return;
      } else if (response.errorCode == 'permission') {
        alert('Permission not satisfied');
        return;
      } else if (response.errorCode == 'others') {
        alert(response.errorMessage);
        return;
      }

      console.log('base64 -> ', response.assets[0].base64);
      console.log('uri -> ', response.assets[0].uri);
      console.log('width -> ', response.assets[0].width);
      console.log('height -> ', response.assets[0].height);
      console.log('fileSize -> ', response.assets[0].fileSize);
      console.log('type -> ', response.assets[0].type);
      console.log('fileName -> ', response.assets[0].fileName);

      setFilePath(response.assets[0]);
    });
  };
  return (
    <SafeAreaView style={{flex: 1}}>
      <Text style={styles.titleText}>Uploading a post</Text>
      <View style={styles.container}>
        <Image
          source={{uri: filePath.uri}}
          name="image"
          style={styles.imageStyle}
        />

        <TextInput
          style={styles.buttonStyle}
          placeholder="caption for status update"
          autoCapitalize="none"
          onChangeText={newCaption => setCaption(newCaption)}
          defaultValue={caption}
          textAlign="center"></TextInput>
        <TouchableOpacity
          activeOpacity={0.5}
          style={styles.buttonStyle}
          onPress={() => chooseFile('photo')}>
          <Text style={styles.textStyle}>Choose Image</Text>
        </TouchableOpacity>

        <TouchableOpacity
          activeOpacity={0.5}
          style={styles.buttonStyle}
          onPress={uploadImage}>
          <Text style={styles.textStyle}>Submit</Text>
        </TouchableOpacity>
        {console.log('caption>>>', caption)}
      </View>
    </SafeAreaView>
  );
};

export default Reel;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  titleText: {
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    paddingVertical: 20,
  },
  textStyle: {
    padding: 10,
    color: 'black',
    textAlign: 'center',
  },
  buttonStyle: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 5,
    marginVertical: 10,
    width: 250,
  },
  imageStyle: {
    width: 200,
    height: 200,
    margin: 5,
  },
});
