import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import React from "react";
import { View, Text, Image, StyleSheet, Pressable } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

interface HeaderProps {
  isHomeScreen: boolean;
  title?: string;
}

const Header = ({ isHomeScreen, title }: HeaderProps) => {
  const insets = useSafeAreaInsets();
  const router = useRouter();
  return (
    <View style={[styles.container, { paddingTop: insets.top }]}>
      {isHomeScreen ? (
        <Image
          source={require("@/assets/images/lonca_logo.png")}
          style={styles.logo}
        />
      ) : title ? (
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            paddingHorizontal: 20,
            justifyContent: "space-between",
          }}
        >
          <Pressable onPress={() => router.back()}>
            <MaterialIcons name="arrow-back-ios" size={20} color="black" />
          </Pressable>
          <Text style={styles.title}>{title}</Text>
        </View>
      ) : (
        <View />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 10,
    backgroundColor: "#fff",
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
  },
  logo: {
    height: 30,
    marginRight: 10,
    resizeMode: "contain",
  },
  title: {
    flex: 1,
    textAlign: "center",
    fontSize: 18,
    paddingRight: 20,
    fontWeight: "bold",
  },
});

export default Header;
