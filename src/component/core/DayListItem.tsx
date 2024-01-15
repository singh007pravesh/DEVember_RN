import { StyleSheet, Text, View } from "react-native";
import React from "react";

type DayListItem = {
    dayItem : number,
}

const DayListItem = ({dayItem}: DayListItem) => {
  return (
    <View style={styles.card}>
      <Text style={styles.text}> {dayItem}</Text>
    </View>
  );
};

export default DayListItem;

const styles = StyleSheet.create({
  
  card: {
    flex: 1,
    aspectRatio: 1,
    backgroundColor: "#F9EDE3",
    borderColor: "#9b4521",
    borderWidth: StyleSheet.hairlineWidth,
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
    margin: 5,
    padding: 5,
  },
  text: {
    color: "#9b4521",
    fontSize: 75,
    // fontFamily: 'AmaticBold',
  },
});
