import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import UIButton from "../UI/UIButton/UIButton";
import { FONTS } from "../../utility/style/fonts";
const ProductCard = ({ item, add }) => {
  return (
    <View style={styles.item}>
      <View style={styles.imgWrapper}>
        <Image
          style={styles.img}
          source={{
            uri: "https://www.pngkey.com/png/full/932-9328043_0172-5000333-pizza-png.png",
          }}
        />
      </View>
      <View style={styles.info}>
        <View style={styles.row}>
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.price}>{item.price}$</Text>
        </View>
        <Text style={styles.description}>{item.description}</Text>
      </View>
      <UIButton
        title="Add"
        buttonStyle={styles.button}
        textStyle={styles.text}
        onPress={add}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  item: {
    justifyContent: "center",
    backgroundColor: "#fff",
    color: "white",
    borderRadius: 7,
    width: "45%",
    padding: 5,
    margin: 5,
    marginTop: 0,
    shadowColor: "rgba(21, 21, 21, 0.1)",
    shadowRadius: 10,
    shadowOpacity: 1,
    boxShadow: "0px -2px 16px 0px ",
  },
  imgWrapper: {
    alignItems: "center",
    justifyContent: "center",
  },
  img: {
    width: 150,
    height: 150,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  info: {
    paddingHorizontal: 5,
  },
  title: {
    justifyContent: "start",
    alignItems: "start",
    fontFamily: FONTS.main,

  },
  description: {
    fontSize: 11,
    color: "#6b6b6b",
    marginTop: 5,
    
  },
  price: {
    fontFamily: FONTS.main_bold,
  },
  button: {
    marginTop: 10,
    paddingVertical: 7,
    paddingHorizontal: 5,
    borderRadius: 4,
    elevation: 3,
  },
  text: {
    fontSize: 12,
    lineHeight: 21,
    fontFamily: FONTS.main_bold,
    letterSpacing: 0.25,
    color: "#3d3220",
  },
});

export default ProductCard;
