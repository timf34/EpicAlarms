import React from "react";
import { View, Button, StyleSheet } from "react-native";

const SimpleButton = () => {
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
    },
  });

  return (
      <View style={styles.container}>
        <Button title="Click me!" onPress={() => console.log("Button pressed")} />
      </View>
  );
};

export default SimpleButton;
