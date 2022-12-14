import { useState } from "react";
import {
  View,
  TextInput,
  Text,
  StyleSheet,
  Pressable,
  Image,
  ScrollView,
  KeyboardAvoidingView,
} from "react-native";

import { Ionicons } from "@expo/vector-icons";
import { FONTS } from "../../utility/style/fonts";
import { COLORS } from "../../utility/style/colors";

const Filter = ({ filterClick }) => {
  const [searchQuery, setSearchQuery] = useState("");

  const onChangeSearch = (query) => {
    setSearchQuery(query);
  };

  return (
    <ScrollView style={[styles.screen,styles.container]}>
        <KeyboardAvoidingView behavior="position" style={styles.screen}>
          <View style={styles.filterWrapper}>
            <View style={styles.header}>
              <Pressable style={styles.closeWrapper} onPress={filterClick}>
                <Ionicons
                  style={styles.close}
                  name="close-circle-outline"
                  size={30}
                  color="black"
                />
              </Pressable>
            </View>
            <View style={styles.imgContainer}>
              <Image
                style={styles.img}
                source={require("../../assets/image/filter.png")}
              />
            </View>
            <View style={styles.filterInput}>
              <Text style={styles.label}> Counter</Text>
              <TextInput
                placeholder="Search"
                style={styles.input}
                onChangeText={onChangeSearch}
                value={searchQuery}
              />
            </View>

            <View style={styles.filterInput}>
              <Text style={styles.label}> Number</Text>
              <TextInput
                placeholder="Search"
                style={styles.input}
                onChangeText={onChangeSearch}
                value={searchQuery}
              />
            </View>

            <View style={styles.filterInput}>
              <Text style={styles.label}> Town</Text>
              <TextInput
                placeholder="Search"
                style={styles.input}
                onChangeText={onChangeSearch}
                value={searchQuery}
              />
            </View>

            <View style={styles.filterInput}>
              <Text style={styles.label}> Town</Text>
              <TextInput
                placeholder="Search"
                style={styles.input}
                onChangeText={onChangeSearch}
                value={searchQuery}
              />
            </View>

            <View style={styles.filterInput}>
              <Text style={styles.label}> Town</Text>
              <TextInput
                placeholder="Search"
                style={styles.input}
                onChangeText={onChangeSearch}
                value={searchQuery}
              />
            </View>
            <View style={styles.filterInput}>
              <Text style={styles.label}> Town</Text>
              <TextInput
                placeholder="Search"
                style={styles.input}
                onChangeText={onChangeSearch}
                value={searchQuery}
              />
            </View>
            <View style={styles.filterInput}>
              <Text style={styles.label}> Town</Text>
              <TextInput
                placeholder="Search"
                style={styles.input}
                onChangeText={onChangeSearch}
                value={searchQuery}
              />
            </View>
          </View>
        </KeyboardAvoidingView>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  container: {
    backgroundColor: COLORS.primary,
  },
  filterWrapper: {
    flex: 1,
    paddingVertical: 50,
    paddingHorizontal: 16,
    backgroundColor: COLORS.primary,

  },
  header: {},
  closeWrapper: {
    height: 40,
    width: 40,
    borderRadius: "50%",
    justifyContent: "center",
    alignItems: "center",
  },
  close: {
    fontFamily: FONTS.main_bold,
    color: "#454545",
  },
  searchWrapper: {
    backgroundColor: "#eee",
    height: 60,
  },
  filterInput: {
    margin: 10,
  },
  label: {
    marginBottom: 5,
    fontFamily: FONTS.main,
  },
  input: {
    fontSize: 14,
    lineHeight: 20,
    paddingHorizontal: 10,
    height: 40,
    color: "#3d3220",
    backgroundColor: "#ffffffd5",
    borderRadius: 7,
    fontFamily: FONTS.main,

    marginBottom: 0,
  },
  imgContainer: {
    justifyContent: "center",
    flexDirection: "row",
  },
  img: {
    width: 150,
    height: 150,
  },
});

export default Filter;
