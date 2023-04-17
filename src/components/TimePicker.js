import React, { useState } from "react";
import { View, StyleSheet, Text, Button } from "react-native";
import DateTimePickerModal from "react-native-modal-datetime-picker";

const TimePicker = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [chosenTime, setChosenTime] = useState(null);

  const showTimePicker = () => {
    setIsVisible(true);
  };

  const hidePicker = () => {
    setIsVisible(false);
  };

  const handleConfirm = (date) => {
    hidePicker();
    setChosenTime(date.toLocaleTimeString());
    console.warn("A time has been picked: ", chosenTime);
  };

  return (
    <View style={styles.root}>
      <Button title="Show Time Picker:)" onPress={showTimePicker} />
      <DateTimePickerModal
        isVisible={isVisible}
        mode="time"
        onConfirm={handleConfirm}
        onCancel={hidePicker}
      />
      {chosenTime && (
        <Text style={styles.chosenTime}>{`You have selected ${chosenTime}`}</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  chosenTime: {
    marginTop: 20,
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default TimePicker;
