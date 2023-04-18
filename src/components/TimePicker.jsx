import React from "react";
import { View, Button, StyleSheet } from "react-native";

const SimpleButton = () => {
  return (
    <View style={style.root}>
      <Button title="Click me!" onPress={() => console.log("Button pressed")} />
    </View>
  );
};

const style = StyleSheet.create({
  root: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  inlineSwitchContainer: {
    marginTop: 28,
    flexDirection: "row",
    alignItems: "center",
  },
  inlineSwitchText: {
    fontSize: 18,
    marginRight: 8,
  },
});
