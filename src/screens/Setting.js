import React, {useState} from 'react';
import {Text, View, Modal, Alert, Pressable} from 'react-native';

const Setting = () => {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: 'yellow',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Pressable onPress={() => setModalVisible(!modalVisible)}>
        <Text
          style={{
            fontSize: 20,
            backgroundColor: 'green',
            padding: 20,
            borderRadius: 10,
          }}>
          show Modal
        </Text>
      </Pressable>
      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisible(!modalVisible);
        }}>
        <View style={{backgroundColor: '#000000aa', flex: 1}}>
          <View
            style={{
              backgroundColor: '#ffffff',
              margin: 50,
              borderRadius: 10,
              flex: 1,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Pressable onPress={() => setModalVisible(!modalVisible)}>
              <Text
                style={{
                  fontSize: 20,
                  backgroundColor: 'green',
                  padding: 20,
                  borderRadius: 10,
                }}>
                Hide Modal
              </Text>
            </Pressable>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default Setting;
