import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { Stack, useLocalSearchParams } from "expo-router";
import { DATA } from "./utils/constants";
import { ProductList } from "./models/model";
import Header from "./components/Header";

const ProductDetail = () => {
  const { id } = useLocalSearchParams();
  const myObj: ProductList = JSON.parse(DATA);
  const product = myObj.find((item) => item._id.$oid === id);

  if (!product) {
    return (
      <View style={styles.center}>
        <Text>Product not found.</Text>
      </View>
    );
  }

  const [selectedImage, setSelectedImage] = useState(product.main_image);

  return (
    <View style={{ flex: 1, backgroundColor: "white" }}>
      <ScrollView contentContainerStyle={styles.container}>
        <Stack.Screen
          options={{
            headerShown: true,
            header: () => (
              <Header isHomeScreen={false} title={product.names.en} />
            ),
          }}
        />
        <Image source={{ uri: selectedImage }} style={styles.image} />
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={styles.thumbnailContainer}
        >
          {product.images.map((img, index) => (
            <TouchableOpacity key={index} onPress={() => setSelectedImage(img)}>
              <Image
                source={{ uri: img }}
                style={[
                  styles.thumbnail,
                  selectedImage === img && styles.selectedThumbnail,
                ]}
              />
            </TouchableOpacity>
          ))}
        </ScrollView>
        <Text style={styles.vendor}>{product.vendor.name}</Text>
        <Text style={styles.price}>${product.price}</Text>
        <Text style={styles.sku}>SKU: {product.product_code}</Text>
        <Text style={styles.series}>Series: {product.series.name}</Text>

        <View style={styles.detailsCard}>
          <Text style={styles.sectionTitle}>Details</Text>
          <Text>Fabric: {product.description_details.en.fabric || "N/A"}</Text>
          <Text>
            Measurements:{" "}
            {product.description_details.en.product_measurements
              ?.replace("Product Dimensions:", "")
              .trim() || "N/A"}
          </Text>
          <Text>
            Model Measurements:{" "}
            {product.description_details.en.model_measurements
              ?.replace("Model Measurements:", "")
              .trim() || "N/A"}
          </Text>
          <Text>
            Sample Size: {product.description_details.en.sample_size || "N/A"}
          </Text>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    padding: 20,
    alignItems: "center",
    backgroundColor: "#fff",
  },
  image: {
    width: "100%",
    height: 300,
    borderRadius: 10,
    resizeMode: "cover",
  },
  name: {
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 10,
    textAlign: "center",
  },
  vendor: {
    fontSize: 16,
    color: "#666",
    paddingTop: 10,
    marginVertical: 2,
  },
  price: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#007BFF",
    marginTop: 5,
  },
  detailsCard: {
    backgroundColor: "#f9f9f9",
    borderRadius: 10,
    padding: 15,
    width: "100%",
    marginTop: 20,
  },
  detailText: {
    fontSize: 14,
    marginBottom: 5,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  sku: {
    fontSize: 14,
    color: "#666",
    marginTop: 4,
  },
  series: {
    fontSize: 14,
    color: "#666",
    marginTop: 2,
  },
  thumbnailContainer: {
    marginTop: 10,
    flexDirection: "row",
  },
  thumbnail: {
    width: 60,
    height: 60,
    marginRight: 10,
    borderRadius: 6,
    borderWidth: 1,
    borderColor: "#ccc",
  },
  selectedThumbnail: {
    borderColor: "#007BFF",
    borderWidth: 2,
  },
});

export default ProductDetail;
