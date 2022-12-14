import { useState } from "react";
import { StyleSheet, View, Image, Text } from "react-native";
import { COLORS } from "../utility/style/colors";
export default function Splash() {
  return (
    <>
      <View style={styles.container}>
        <View style={styles.imgWrapper}>
          <Image
            style={styles.img}
            source={require("../assets/image/logo.png")}
          />
          <Text style={styles.text}>Fox</Text>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.primary,
    justifyContent: "center",
  },
  imgWrapper: {
    justifyContent: "center",
    alignItems: "center",
    marginBottom: "40%",
  },
  img: {
    width: 150,
    height: 150,
  },
  text: {
    fontSize: 25,
    marginTop: 10,
    letterSpacing: 15,
  },
});
