
//import { Camera, CameraType } from 'expo-camera';
import { CameraView, useCameraPermissions } from 'expo-camera/next';
import { useEffect, useState } from 'react';
import { Button, Pressable, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useMainStore } from '../src/store/store';

export default function Page() {
const { qrCode } = useMainStore();
  const handleCodeScanned = (data: any) => {
    console.log(data);
    if (data.data !== qrCode){
      useMainStore.setState({ qrCode: data.data });
    }

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
          <CameraView style={styles.camera}
            barcodeScannerSettings={{ barCodeTypes: ['qr'] }}
            onBarcodeScanned={handleCodeScanned} />
            <View style={styles.info}>
            <Text style={styles.qrCodeText}>{qrCode}</Text>
            <Pressable
              onPress={() => {
                useMainStore.setState({ qrCode: '' });
              }}>
                <View style={styles.button}>
                <Text style={styles.buttonText}>Clear</Text>
                </View>
            </Pressable>
            </View>
        </View>
      </View> 
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    //padding: 24,
  },
  camera: {
    flex: 5,
    width: "100%",
    aspectRatio: 1,
  },
  info: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  qrCodeText: {
    color: 'black',
    fontSize: 20,
  },
  button: {
    backgroundColor: 'black',
    padding: 16,
    borderRadius: 5,
    margin: 10,
  },
  buttonText: {
    color: 'white',
  },

});