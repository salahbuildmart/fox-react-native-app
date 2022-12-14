import React from "react";
import  styles  from "./style.js";
import { Image, TouchableOpacity } from "react-native";

const UIBanner = ({
  source,
  onPress,
  style
}) => {
  return (
    <TouchableOpacity
      style={{
        ...styles.container,
        ...style
      }}
      onPress={onPress}
    >
    <Image
          style={styles.img}
          source={source}
        />
    </TouchableOpacity>
  );
};

export default UIBanner;
