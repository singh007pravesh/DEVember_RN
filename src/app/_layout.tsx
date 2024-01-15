import { Stack } from 'expo-router/stack';
import {useFonts, Inter_900Black ,} from '@expo-google-fonts/inter'
import {AmaticSC_400Regular, AmaticSC_700Bold} from "@expo-google-fonts/amatic-sc"
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from "react";



SplashScreen.preventAutoHideAsync();
export default function Layout() {

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

  return <Stack screenOptions={{headerStyle: { backgroundColor: 'papayawhip' }, headerTitleAlign: 'center'}} >
    <Stack.Screen name = "index" options={{title:"Devember"}}/>
    </Stack>
}
