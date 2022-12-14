import react, { useState } from "react";
import { StyleSheet, View, TextInput, Button, Platform } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import Pressable from "react-native/Libraries/Components/Pressable/Pressable";

const SearchBar = ({ onChange, filterClick }) => {
  const [searchQuery, setSearchQuery] = useState("");

  const onChangeSearch = (query) => {
    setSearchQuery(query);
    onChange(query);
  };

  return (
    <View style={styles.searchWrapper}>
      <TextInput
        placeholder="Search"
        style={styles.input}
        onChangeText={onChangeSearch}
        value={searchQuery}
      />
      <Pressable onPress={filterClick}>
        <Ionicons
          style={styles.close}
          name="ios-filter-sharp"
          size={30}
          color="black"
        />
      </Pressable>
    </View>
  );
};

export default SearchBar;
const styles = StyleSheet.create({
  searchWrapper: {
    backgroundColor: "#eee",
    height: 60,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  input: {
    fontSize: 14,
    lineHeight: 20,
    paddingHorizontal: 10,
    height: 40,
    color: "#3d3220",
    backgroundColor: "white",
    borderRadius: Platform.select({ ios: 7, android: 5 }),
    margin: 10,
    width: "80%",
  },
});
