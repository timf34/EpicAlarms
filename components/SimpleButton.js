import {Button, StyleSheet, View} from "react-native";
import React from "react";

// This is just for testing
export const SimpleButton = () => {
    const styles = StyleSheet.create({
        container: {
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
        },
    });

    return (
        <View style={styles.container}>
            <Button title="Click me!" onPress={() => console.log("Button pressed")}/>
        </View>
    );
};