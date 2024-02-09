import { useEffect, useState } from 'react';
import { Button, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Tabs, Stack, router } from 'expo-router';

export default function Page() {

  return (
    <SafeAreaProvider>
      <Stack>
        <Stack.Screen
          name="index"
          options={{
            presentation: 'containedModal',
            title: 'Scanner',
            headerStyle: {
              backgroundColor: 'white',

            },
            headerRight: () => (
              <TouchableOpacity onPress={() => {
                router.push('display');
              }}>
                <View style={styles.button}>
                  <Text style={styles.buttonText}>display</Text>
                </View>
              </TouchableOpacity>
            ),

          }}
        />
        <Stack.Screen
          name="display"
          options={{
            presentation: 'card',
            animation: 'default',
            title: 'display1',
            headerStyle: {
              backgroundColor: 'white',
            },
          }}
        />
      </Stack>

    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: 'black',
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
  },
});
