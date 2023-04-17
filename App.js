import React from "react";
import { View } from "react-native";
import { SimpleButton, TimePicker } from "./components/TimePicker";

const App = () => {
    return (
        <View style={{ flex: 1 }}>
            <TimePicker />
        </View>
    );
};

export default App;
