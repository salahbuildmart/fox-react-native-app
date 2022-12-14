import { StyleSheet, SafeAreaView } from "react-native";
import { StatusBar } from "expo-status-bar";
import { useFonts } from "expo-font";
import Home from "./Screens/home";
import Splash from "./Screens/splash";
import { useState, useEffect } from "react";

export default function App() {
  const [appLoaded] = useFonts({
    "poppins": require("./assets/fonts/Poppins-ExtraLight.ttf"),
    "poppins-bold": require("./assets/fonts/Poppins-SemiBold.ttf"),
  });

  if (!appLoaded) {
    return <Splash />;
  }
  return (
    <>
      <StatusBar style="dark" />
      <SafeAreaView>
        <Home />
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({});
