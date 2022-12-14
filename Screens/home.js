import { useState } from "react";
import { StyleSheet, Text, View, FlatList, Modal, Alert, Dimensions } from "react-native";
import { StatusBar } from "expo-status-bar";
import ProductCard from "../components/Item/Item";
import { DATA } from "../utility/data";
import SearchBar from "../components/SearchBar/SearchBar";
import Filter from "../components/Filter/Filter";
import UIBanner from "../components/UI/UIBanner/UIBanner";
import { COLORS } from "../utility/style/colors";
import { FONTS } from "../utility/style/fonts";

export default function Home() {
  const [products, setProducts] = useState(DATA);
  const [filterModalIsVisible, setFilterModalIsVisible] = useState(false);

  const addToCard = () => {
    Alert.alert('you chosen me :)')
    console.log("ss");
  };

  const renderItem = ({ item }) => <ProductCard item={item} add={addToCard} />;

  const onSearchHandler = (query) => {
    let filteredList = DATA.filter((item) => item.title.includes(query));
    setProducts(filteredList);
  };

  return (
    <>
      <View style={styles.container}>
        <View style={styles.searchBar}>
          <SearchBar
            onChange={onSearchHandler}
            filterClick={() => setFilterModalIsVisible(!filterModalIsVisible)}
          />
        </View>
        <Modal visible={filterModalIsVisible} animationType="slide">
          <Filter
            filterClick={() => setFilterModalIsVisible(!filterModalIsVisible)}
          />
        </Modal>

        <UIBanner
          source={{
            uri: "https://i.pinimg.com/originals/27/d3/48/27d3480199613eab6fc4232dc71b7247.png",
          }}
        />
        <View style={styles.subAds}>
          <UIBanner
            source={{
              uri: "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/burger-menu-banner-design-template-d881b2991c97bde8541cbc702cbd306c_screen.jpg?ts=1650878764",
            }}
            style={{ width: "49%" }}
          />

          <UIBanner
            source={{
              uri: "https://media-cdn.tripadvisor.com/media/photo-s/1d/be/bf/94/we-know-how-much-you.jpg",
            }}
            style={{ width: "49%" }}
          />
        </View>
        {/* <UIButton
            title="SEND"
            buttonStyle={{ width: "90%", alignSelf: "center" }}
            textStyle={{ fontSize: 20 }}
            onPress={() => setFilterModalIsVisible(!filterModalIsVisible)}
          /> */}

        <Text style={styles.label}>Category List</Text>
        <View style={styles.list}>
          <FlatList
            data={products}
            renderItem={renderItem}
            keyExtractor={(item, index) => index}
          />
          {!products.length && (
            <Text style={styles.emptyState}>No Search Result ... !</Text>
          )}
        </View>
      </View>
    </>
  );
}

const width  = Dimensions.get('window').width
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    alignItems: "stretch",
    justifyContent: "start",
    marginHorizontal: "2%",
  },
  searchBar: {},
  label: {
    marginVertical: 20,
    fontSize: width < 308 ? 16 : 18,
    fontFamily: FONTS.main_bold,
    color: COLORS.gray,
  },
  emptyState: {
    justifyContent: "center",
    textAlign: "center",
    marginTop: "50%",
  },
  subAds: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  list: {
    height:300
  },
});
