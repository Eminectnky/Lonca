import { Image, Text, TouchableOpacity, StyleSheet } from "react-native";
import React from "react";
import { router } from "expo-router";
import { Product } from "../models/model";

interface ProductItemProps {
  data: Product;
}

const ProductItem = ({ data }: ProductItemProps) => {
  return (
    <TouchableOpacity
      style={styles.card}
      onPress={() =>
        router.push({
          pathname: "/productDetail",
          params: { id: data._id.$oid },
        })
      }
    >
      <Image source={{ uri: data.main_image }} style={styles.image} />
      <Text style={styles.name}>{data.names.en}</Text>
      <Text style={styles.vendor}>{data.vendor.name}</Text>
      <Text style={styles.price}>${data.price}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
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

export default ProductItem;
