import React from "react";
import {
  View,
  Text,
  FlatList,
  Button,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import products from "../components/product";
import AsyncStorage from "@react-native-async-storage/async-storage";

const HomeScreen = ({ navigation }) => {
  const addToCart = async (product) => {
    try {
      const cartData = await AsyncStorage.getItem("cart");
      const cart = cartData ? JSON.parse(cartData) : [];
      const updatedCart = [...cart, product];
      await AsyncStorage.setItem("cart", JSON.stringify(updatedCart));
      Alert.alert(
        "Added to Cart",
        `${product.name} has been added to your cart.`
      );
    } catch (error) {
      console.error("Error adding to cart: ", error);
    }
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView style={{ marginTop: 20, marginHorizontal: 30 }}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <View>
            <Image source={require("../assets/Menu.png")} />
          </View>
          <View style={{ alignItems: "center" }}>
            <Image source={require("../assets/Logo.png")} />
          </View>
          <View style={{ flexDirection: "row", gap: 15 }}>
            <TouchableOpacity>
              <Image source={require("../assets/Search.png")} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate("Cart")}>
              <Image source={require("../assets/shoppingBag.png")} />
            </TouchableOpacity>
          </View>
        </View>

        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginTop: 20,
          }}
        >
          <View>
            <Text style={{ fontSize: 20, fontWeight: "500", marginBottom: 10 }}>
              OUR STORY
            </Text>
          </View>
          <View style={{ flexDirection: "row", gap: 15 }}>
            <Image source={require("../assets/Listview.png")} />
            <Image source={require("../assets/Filter.png")} />
          </View>
        </View>

        <FlatList
          data={products}
          keyExtractor={(item) => item.id}
          numColumns={2}
          contentContainerStyle={{ paddingHorizontal: 0, alignItems: "center" }}
          columnWrapperStyle={{ gap: 10, marginBottom: 10 }}
          renderItem={({ item }) => (
            <View>
              <View style={{ position: "relative", width: 165, height: 221 }}>
                <Image
                  source={item.image}
                  style={{
                    width: "100%",
                    height: "100%",
                    resizeMode: "cover",
                    borderRadius: 5,
                  }}
                />
                <TouchableOpacity
                  style={{
                    position: "absolute",
                    bottom: 10,
                    right: 5,
                    padding: 5,
                  }}
                  onPress={() => addToCart(item)}
                >
                  <Image source={require("../assets/add_circle.png")} />
                </TouchableOpacity>
              </View>

              <View>
                <Text style={{ fontSize: 22, fontWeight: "500" }}>
                  {item.kind}
                </Text>
                <Text style={{ fontSize: 18, fontWeight: "300" }}>
                  {item.name}
                </Text>
                <Text
                  style={{ fontSize: 18, fontWeight: "300", color: "#FF5722" }}
                >
                  ${item.price}
                </Text>
              </View>
            </View>
          )}
        />
        <Button
          title="Go to Cart"
          onPress={() => navigation.navigate("Cart")}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff",
  },
  title: {},
  product: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
    marginBottom: 10,
  },
});

export default HomeScreen;
