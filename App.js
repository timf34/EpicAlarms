import React, { useState } from 'react';
import { StyleSheet, TouchableOpacity, Text, View, Alert } from 'react-native';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import { format } from 'date-fns';

function App() {
  const [alarmTime, setAlarmTime] = useState(null);
  const [isDateTimePickerVisible, setIsDateTimePickerVisible] = useState(false);

  const showDateTimePicker = () => setIsDateTimePickerVisible(true);

  const hideDateTimePicker = () => setIsDateTimePickerVisible(false);

  const handleDatePicked = (date) => {
    setAlarmTime(date);
    hideDateTimePicker();
    setTimeout(() => {
      playAlarm();
      Alert.alert('Alarm', 'Wake up!', [{ text: 'Stop', onPress: stopAlarm }]);
    }, date.getTime() - Date.now());
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={showDateTimePicker}>
        <Text style={styles.buttonText}>Set Alarm</Text>
      </TouchableOpacity>
      {alarmTime && (
        <Text style={styles.alarmText}>Alarm set for {format(alarmTime, 'h:mm a')}</Text>
      )}
      <DateTimePickerModal
        isVisible={isDateTimePickerVisible}
        mode="time"
        onConfirm={handleDatePicked}
        onCancel={hideDateTimePicker}
      />
    </View>
  );
}
