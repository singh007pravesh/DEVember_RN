import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, FlatList } from "react-native";
import DayListItem from "../../src/component/core/DayListItem";
import {useFonts, Inter_900Black ,} from '@expo-google-fonts/inter'
import {AmaticSC_400Regular, AmaticSC_700Bold} from "@expo-google-fonts/amatic-sc"
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from "react";

SplashScreen.preventAutoHideAsync();

export default function HomeScreen() {
  // console.warn('Generating waring message.')

  const days = [ ...Array(24).keys() ].map( i => i+1);
  // console.log(days);

  const [fontsLoaded, fontError] = useFonts({
    Inter: Inter_900Black,
    Amatic: AmaticSC_400Regular,
    AmaticBold: AmaticSC_700Bold

  });

  useEffect(()=>{
    if (fontsLoaded || fontError) {
      SplashScreen.hideAsync();
    }

  },[fontsLoaded,fontError])
  
  if (!fontsLoaded && !fontError) {
    return null;
  }
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
