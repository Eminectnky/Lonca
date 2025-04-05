import React from "react";
import {
  View,
  Text,
  FlatList,
  Image,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { DATA } from "./utils/constants";
import { ProductList } from "./models/model";
import { Stack, useRouter } from "expo-router";
import Header from "./components/Header";
import ProductItem from "./components/ProductItem";

const index = () => {
  const myObj: ProductList = JSON.parse(DATA);
  return (
    <View style={styles.container}>
      <Stack.Screen
        options={{
          headerShown: true,
          header: () => <Header isHomeScreen={true} />,
        }}
      />
      <FlatList
        numColumns={2}
        data={myObj}
        keyExtractor={(item) => item._id.$oid}
        contentContainerStyle={styles.flatListContent}
        columnWrapperStyle={styles.row}
        renderItem={({ item }) => <ProductItem data={item} />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
  },
  flatListContent: {
    paddingHorizontal: 10,
    paddingTop: 10,
  },
  row: {
    justifyContent: "space-between",
    marginBottom: 15,
  },
  card: {
    backgroundColor: "white",
    borderRadius: 10,
    padding: 10,
    width: "48%",
    alignItems: "center",
  },
  image: {
    width: "100%",
    height: 150,
    borderRadius: 10,
    resizeMode: "cover",
  },
  name: {
    fontSize: 16,
    fontWeight: "bold",
    marginTop: 10,
    textAlign: "center",
  },
  vendor: {
    fontSize: 14,
    color: "#666",
    textAlign: "center",
  },
  price: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#007BFF",
    marginTop: 5,
  },
});

export default index;
