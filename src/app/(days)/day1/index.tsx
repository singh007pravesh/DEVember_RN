import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Stack } from "expo-router";

const Day1Screen = () => {
  return (
    <View>
      <Stack.Screen options={{ title: "DAY 1", headerTitleAlign: "center" }} />
      <Text style={styles.text}>Day1Screen</Text>
    </View>
  );
};

export default Day1Screen;

const styles = StyleSheet.create({
  text: {
    color: "#9b4521",
    fontSize: 75,
    fontFamily: "Amatic",
  },
});
