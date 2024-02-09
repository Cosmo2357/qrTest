
//import { Camera, CameraType } from 'expo-camera';
import { CameraView, useCameraPermissions } from 'expo-camera/next';
import { useEffect, useState } from 'react';
import { Button, Pressable, StyleSheet, Text, TouchableOpacity, View, Modal, Alert } from 'react-native';
import { useMainStore } from '../src/store/store';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

export default function Page() {
  const [modalVisible, setModalVisible] = useState<boolean>(false);
  const { qrCode, exampleFunc } = useMainStore();
  const handleCodeScanned = (data: any) => {
    console.log(data);
  }

  const [permission, requestPermission] = useCameraPermissions();

  useEffect(() => {
    requestPermission();
  });

  if (!permission?.granted) {
    return null;
  }

  return (
    <View style={styles.container}>
      <View style={styles.container}>
        <Modal
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            setModalVisible(!modalVisible);
          }}>
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <Text style={styles.modalText}>Hello World!</Text>
              <Pressable
                style={[styles.button, styles.buttonClose]}
                onPress={() => {
                  setModalVisible(!modalVisible)
                }}>
                <Text style={styles.textStyle}>Hide Modal</Text>
              </Pressable>
            </View>
          </View>
        </Modal>
        <Text >display</Text>
        <Text style={styles.qrCodeText}>{qrCode}</Text>
        <View style={styles.columnContainer}>
          <FontAwesome name="home" color={'white'} size={24} />
          <FontAwesome name="home" color={'white'} size={24} />
          <FontAwesome name="user" color={'white'} size={24} />
        </View>
        <Pressable
          style={[styles.button, styles.buttonOpen]}
          onPress={() => {
            useMainStore.setState({ qrCode: '' });
          }}>
          <Text style={styles.textStyle}>Clear</Text>
        </Pressable>
        <Pressable
          style={[styles.button, styles.buttonOpen]}
          onPress={() => setModalVisible(true)}>
          <Text style={styles.textStyle}>Show Modal</Text>
        </Pressable>
        <Pressable
          style={[styles.button, styles.buttonOpen]}
          onPress={() => {
            Alert.alert('Alert Title', 'My Alert Msg', [
              { text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel' },
              { text: 'OK', onPress: () => console.log('OK Pressed') },
            ]);

          }}>
          <Text style={styles.textStyle}>Show Alert</Text>
        </Pressable>
        <Pressable
          style={[styles.button, styles.buttonOpen]}
          onPress={() => {
            exampleFunc('Hello This is Display Page!');
          }}>
          <Text style={styles.textStyle}>Trigger Global State Function</Text>
        </Pressable>

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-around",
  },
  columnContainer: {
    justifyContent: "space-between",
    flexDirection: "row",
    backgroundColor: 'blue',
    width: '100%',
    padding: 30,
  },
  buttonText: {
    color: 'white',
    fontSize: 20,
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 10,
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 10,
    padding: 20,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#000000',
  },
  buttonClose: {
    backgroundColor: '#000000',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
  },
  qrCodeText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
  }

});