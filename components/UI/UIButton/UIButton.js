import React from "react";
import  styles  from "./style.js";
import { Text, TouchableOpacity } from "react-native";

const UIBanner = ({
  title,
  onPress,
  buttonColor,
  titleColor,
  buttonStyle,
  textStyle,
}) => {
  return (
    <TouchableOpacity
      style={{
        ...styles.container,
        ...buttonStyle,
        backgroundColor: buttonColor || "#fec912",
      }}
      onPress={onPress}
    >
      <Text
        style={{
          ...styles.title,
          ...textStyle,
          color: titleColor || "#3d3220",
        }}
      >
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default UIBanner;
