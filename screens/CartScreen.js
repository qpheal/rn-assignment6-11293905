import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  FlatList,
  Button,
  StyleSheet,
  Image,
  TouchableOpacity,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { ScrollView } from "react-native-web";

const CartScreen = ({ navigation }) => {
  const [cart, setCart] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    const loadCart = async () => {
      try {
        const cartData = await AsyncStorage.getItem("cart");
        if (cartData !== null) {
          setCart(JSON.parse(cartData));
          calculateTotalPrice(JSON.parse(cartData));
        }
      } catch (error) {
        console.error("Error loading cart: ", error);
      }
    };

    loadCart();
  }, []);

  const removeFromCart = async (productId) => {
    try {
      const updatedCart = cart.filter((item) => item.id !== productId);
      setCart(updatedCart);
      await AsyncStorage.setItem("cart", JSON.stringify(updatedCart));
      calculateTotalPrice(updatedCart);
    } catch (error) {
      console.error("Error removing from cart: ", error);
    }
  };

  const calculateTotalPrice = (items) => {
    const totalPrice = items.reduce((total, item) => total + item.price, 0);
    setTotalPrice(totalPrice);
  };

  return (
    <View style={styles.container}>
    <ScrollView>
          <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          paddingHorizontal: 20,
          paddingVertical: 10,
          marginBottom: 5
        }}
      >
        <View
          style={{ justifyContent: "center", alignItems: "center", flex: 1 }}
        >  <Image source={require("../assets/Logo.png")} /></View>
       <TouchableOpacity> <Image
          source={require("../assets/Search.png")}
          style={{ justifyContent: "flex-end" }}
        /></TouchableOpacity>
       
      </View>

      <View style={{alignItems: 'center', marginBottom: 10}}>
        <Text style={{ color: "#000", fontSize: 22, marginBottom: 10, fontFamily: 'Georgia' }}>CHECKOUT</Text>
        <View style={{borderBottomWidth: 1, borderBottomColor: '#333', width: '10%'}}></View>
      </View>
        
      <FlatList
        data={cart}
        keyExtractor={(item) => item.id.toString()} // Ensure keyExtractor returns a string
        renderItem={({ item }) => (
          <View style={{ flexDirection: "row", gap: 10, alignItems: "center", justifyContent: 'center', marginBottom: 10 }}>
            <View style={{ position: "relative", width: 112, height: 150,  }}>
              <Image
                source={item.image}
                style={{
                  width: "100%",
                  height: "100%",
                  resizeMode: "cover",
                  borderRadius: 10
                }}
              />
            </View>
            <View>
              <Text style={{fontSize: 22, fontWeight: '500'}}>{item.kind}</Text>
              <Text style={{fontSize: 18, fontWeight: '300'}}>{item.name}</Text>
              <Text style={{fontSize: 18, fontWeight: '300', color: "#FF5722"}}>${item.price}</Text>
            </View>
            <TouchableOpacity
              style={{
                top: 50,
                padding: 5,
              }}
              onPress={() => removeFromCart(item.id)}
            >
              <Image source={require("../assets/remove.png")} />
            </TouchableOpacity>
          </View>
        )}
        ListEmptyComponent={<Text>Your cart is empty</Text>}
      />

      <View
        style={{
        marginTop: 10,
          width: "80%",
          
          paddingVertical: 10,
          marginHorizontal: 20,
          alignItems: "center",
        }}
      >
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            width: "100%",
            marginBottom: 20,
          }}
        >
          <Text
            style={{
              fontSize: 20,
              color: "#555",
              textTransform: "uppercase",
              fontWeight: "500",
            }}
          >
            EST. TOTAL
          </Text>
          <Text style={{ fontSize: 24, color: "#FF5722", fontWeight: "500" }}>
            ${totalPrice.toFixed(2)}
          </Text>
        </View>
        <TouchableOpacity
          style={{
            flexDirection: "row",
            gap: 10,
            backgroundColor: "#777",
            width: "80%",
            padding: 10,
            alignContent: "center",
            justifyContent: "center",
          }}
          onPress={() => navigation.navigate("Home")}
        >
          <Image source={require("../assets/shoppingBag.png")} />
          <Text style={{ color: "#fff", fontSize: 20 }}>CHECKOUT</Text>
        </TouchableOpacity>
      </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },
  product: {},

  totalText: {
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default CartScreen;