import { StyleSheet, Text, View, Pressable, Button } from "react-native";
import React from "react";
import { Stack, Link } from "expo-router";
import { Inter_400Regular } from "@expo-google-fonts/inter";

const Day2screen = () => {
  return (
    <View style={styles.main}>
      <Stack.Screen
        options={{
          title: "DAY 2: Onboarding Screens",
          headerTitleAlign: "center",
        }}
      />

      <Link href="/day2/onboarding" asChild>
      <Pressable style={styles.button}>
        <Text style={styles.buttonText}> Go To OnBoarding</Text>
      </Pressable>
      </Link>
    </View>
  );
};

export default Day2screen;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F9EDE3",
  },
  button:{
    backgroundColor:'#4183F2',
    padding:15,
    borderRadius:10,
  },
  buttonText:{
    color:'#fff',
  }
});
