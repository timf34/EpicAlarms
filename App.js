import React from 'react';
import { StyleSheet, TouchableOpacity, Text, View } from 'react-native';
import { playAlarm } from './AlarmPlayer';

function App() {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={playAlarm}>
        <Text style={styles.buttonText}>Play Alarm</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    backgroundColor: '#007AFF',
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default App;
