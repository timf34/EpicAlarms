import React, { useState } from "react";
import { View, Button, StyleSheet } from "react-native";
import { scheduleNotificationAsync } from "expo-notifications";

export const AlarmButton = () => {
    const [notificationId, setNotificationId] = useState(null);

    const styles = StyleSheet.create({
        container: {
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
        },
    });

    const handlePress = async () => {
        // Get the current time and add 10 seconds to it
        const trigger = new Date(Date.now() + 10000);

        // Schedule the notification
        const notification = await scheduleNotificationAsync({
            content: {
                title: "Alarm",
                body: "Your alarm has gone off!",
            },
            trigger,
        });

        // Store the ID of the notification for later reference
        setNotificationId(notification.identifier);
    };

    return (
        <View style={styles.container}>
            <Button title="Set Alarm" onPress={handlePress} />
        </View>
    );
};
