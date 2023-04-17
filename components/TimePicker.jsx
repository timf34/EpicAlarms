import React, {useState} from "react";
import {Button, Platform, StyleSheet, Switch, Text, View} from "react-native";
import DateTimePickerModal from "react-native-modal-datetime-picker";


export const TimePicker = () => {
    const [pickerMode, setPickerMode] = useState(null);
    const [inline, setInline] = useState(false);
    const [chosenTime, setChosenTime] = useState(null);

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
        chosenTime: {
        marginTop: 20,
            fontSize: 18,
            fontWeight: "bold",
        },
    });

    const showTimePicker = () => {
        setPickerMode("time");
    };

    const hidePicker = () => {
        setPickerMode(null);
    };

    const handleConfirm = (date) => {
        hidePicker();
        const chosenTime = date.toLocaleTimeString();
        setChosenTime(chosenTime);
        console.warn("A time has been picked: ", chosenTime);
    };

    return (
        <View style={style.root}>
            <Button title="Show Time Picker" onPress={showTimePicker}/>
            {Platform.OS === "ios" && (
                <View style={style.inlineSwitchContainer}>
                    <Text style={style.inlineSwitchText}>Display inline?</Text>
                    <Switch value={inline} onValueChange={setInline}/>
                </View>
            )}
            <DateTimePickerModal
                isVisible={pickerMode !== null}
                mode={pickerMode}
                onConfirm={handleConfirm}
                onCancel={hidePicker}
                display={inline ? "inline" : undefined}
            />
        </View>
    );
};
