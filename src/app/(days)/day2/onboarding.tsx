import { StyleSheet, Text, View, SafeAreaView, Pressable } from "react-native";
import React, { useState } from "react";
import { Stack, Link, router } from "expo-router";
import { FontAwesome5 } from "@expo/vector-icons";
import { StatusBar } from "expo-status-bar";
import {
  GestureDetector,
  Gesture,
  Directions,
} from "react-native-gesture-handler";
import Animated, {
  FadeIn,
  FadeOut,
  SlideOutLeft,
  SlideInRight,
} from "react-native-reanimated";

const OnboardingSteps = [
  {
    icon: "people-arrows",
    title: "Step 1: Get Started",
    description:
      "Welcome to our app! Explore amazing features and services designed just for you.",
  },
  {
    icon: "snowflake",
    title: "Step 2: Discover",
    description:
      "Discover the latest trends and updates. Stay connected with what matters to you.",
  },
  {
    icon: "slideshare",
    title: "Step 3: Enjoy",
    description:
      "Enjoy a seamless experience with our user-friendly interface and innovative features.",
  },
];

const OnboardingScreen = () => {
  const [onboardingIndex, SetonboardingIndex] = useState(0);

  const onboardingData = OnboardingSteps[onboardingIndex];

  const continueScreen = () => {
    const islastIndex = onboardingIndex === OnboardingSteps.length - 1;

    if (islastIndex) {
      goBack();
    } else {
      SetonboardingIndex(onboardingIndex + 1);
    }
    console.log("calling forward");
  };

  const backScreen = () => {
    const islastIndex = onboardingIndex === 0;

    if (islastIndex) {
      goBack();
    } else {
      SetonboardingIndex(onboardingIndex - 1);
    }
    console.log("calling back");
  };

  const goBack = () => {
    router.back();
  };

  //   Gesture.Simultaneous()

  const swipes = Gesture.Race(
    Gesture.Fling().direction(Directions.LEFT).onEnd(continueScreen),
    Gesture.Fling().direction(Directions.RIGHT).onEnd(backScreen)
  );

  return (
    <SafeAreaView style={styles.page}>
      <Stack.Screen
        options={{
          headerShown: false,
        }}
      />
      <StatusBar style="light" />
      <View style={styles.stepContainer}>
        {OnboardingSteps.map((step, index) => (
          <View
            key={index}
            style={[
              styles.stepIndicator,
              {
                backgroundColor: index == onboardingIndex ? "#FDFDFD" : "gray",
              },
            ]}
          />
        ))}
      </View>
      <GestureDetector gesture={swipes}>
        <View style={styles.pageContent} key={onboardingIndex}>
          <Animated.View
            style={styles.iconContainer}
            entering={FadeIn.delay(150)}
            exiting={FadeOut.delay(150)}
          >
            <FontAwesome5
              name={onboardingData.icon}
              size={78}
              color="#CEF202"
            />
          </Animated.View>
          <View style={styles.textContainer}>
            <Animated.Text
              entering={SlideInRight}
              exiting={SlideOutLeft}
              style={styles.title}
            >
              {onboardingData.title}
            </Animated.Text>
            <Animated.Text
              entering={SlideInRight.delay(150)}
              exiting={SlideOutLeft}
              style={styles.description}
            >
              {onboardingData.description}
            </Animated.Text>
          </View>

          <View style={styles.buttonRow}>
            <Pressable onPress={goBack}>
              <Text style={styles.buttonText}>Skip</Text>
            </Pressable>

            <Pressable onPress={continueScreen} style={styles.button}>
              <Text style={styles.buttonText}>Continue</Text>
            </Pressable>
          </View>
        </View>
      </GestureDetector>
    </SafeAreaView>
  );
};

export default OnboardingScreen;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: "#000",
  },
  pageContent: {
    flex: 1,
    // backgroundColor: "red",
    justifyContent: "space-around",
    padding: 20,
  },
  iconContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  textContainer: {
    flex: 0.7,
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  title: {
    fontFamily: "Inter",
    color: "#FDFDFD",
    fontSize: 40,
    alignSelf: "center",
    textAlign: "center",
    letterSpacing: 1.3,
    marginVertical: 20,
  },
  description: {
    fontFamily: "InterSemi",
    color: "gray",
    fontSize: 20,
    lineHeight: 28,
    // textAlign: "center",
  },
  buttonRow: {
    flex: 0.3,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    marginVertical: 20,
    // backgroundColor:'red',
  },
  buttonText: {
    color: "#fff",
    paddingHorizontal: 25,
    paddingVertical: 10,
    fontFamily: "InterRegular",
    fontSize: 15,
  },
  button: {
    backgroundColor: "gray",
    borderRadius: 10,
  },

  //step
  stepContainer: {
    flexDirection: "row",
    marginTop: 45,
    paddingHorizontal: 20,
    gap: 5,
  },
  stepIndicator: {
    flex: 1,
    height: 3,
    backgroundColor: "gray",
    borderRadius: 5,
  },
});
