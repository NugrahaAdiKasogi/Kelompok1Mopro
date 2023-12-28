import React from "react";
import {
  View,
  Text,
  SafeAreaView,
  Pressable,
  StyleSheet,
  Image,
} from "react-native";
import { auth } from "../firebase";
import { signOut } from "firebase/auth";
import { useNavigation } from "@react-navigation/native";

const ProfileScreen = () => {
  const user = auth.currentUser;
  const navigation = useNavigation();
  const signOutUser = () => {
    signOut(auth)
      .then(() => {
        navigation.replace("Login");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.profileInfo}>
        <Image
          source={{ uri: user.photoURL }} // Ganti dengan URL foto profil pengguna
          style={styles.profileImage}
        />
        <Text style={styles.welcomeText}>Welcome, {user.displayName}</Text>
        <Text style={styles.emailText}>{user.email}</Text>
      </View>

      <Pressable style={styles.signOutButton} onPress={signOutUser}>
        <Text style={styles.signOutText}>Sign Out</Text>
      </Pressable>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ffffff",
  },
  profileInfo: {
    alignItems: "center",
    marginBottom: 30,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 10,
  },
  welcomeText: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 5,
  },
  emailText: {
    fontSize: 16,
    color: "#777",
  },
  signOutButton: {
    backgroundColor: "#FF6347",
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
  },
  signOutText: {
    color: "#ffffff",
    fontSize: 18,
  },
});

export default ProfileScreen;
