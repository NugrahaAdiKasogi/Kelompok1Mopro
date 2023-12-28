import React from "react";
import {
  View,
  Text,
  Image,
  Button,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

const StartingScreen = () => {
  const navigation = useNavigation();

  const handleNext = () => {
    // Ganti 'NextScreen' dengan nama screen selanjutnya di dalam navigation
    navigation.navigate("Login");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Welcome To</Text>
      <Text style={styles.appName}>Spinfinity</Text>
      <Image
        source={require("../assets/logo.png")} // Ganti dengan path logo Anda
        style={styles.logo}
        resizeMode="contain"
      />
      <TouchableOpacity onPress={handleNext} style={styles.button}>
        <Text style={styles.buttonText}>Next</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundGradient: "linear-gradient(120deg, #00CED1, #4682B4)",
  },
  heading: {
    fontSize: 32,
    fontWeight: "bold",
    marginBottom: 10,
  },
  appName: {
    fontSize: 24,
    fontWeight: "400",
    marginBottom: 20,
  },
  logo: {
    width: 200,
    height: 200,
    marginBottom: 30,
  },
  button: {
    backgroundColor: "#318CE7",
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: "#ffffff",
    fontSize: 18,
  },
});

export default StartingScreen;
