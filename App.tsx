import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, FlatList } from "react-native";
import DayListItem from "./src/component/core/DayListItem";

export default function App() {
  // console.warn('Generating waring message.')

  const days = [ ...Array(24).keys() ].map( i => i+1);
  // console.log(days);
  return (
    <View style={styles.container}>
      <FlatList
        data={days}
        columnWrapperStyle={styles.column}
        style={styles.contentStyle}
        numColumns={2}
        renderItem={(item) => 
          <DayListItem dayItem ={item.item}/>
        }
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  contentStyle: {
    padding: 1,
    // backgroundColor:'green',
  },
  column: {
    // flex:1,
  },
  
});
