// app/home.js
import { useRouter } from "expo-router";
import { signOut } from "firebase/auth";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { auth } from "./config/firebaseConfig";

export default function HomeScreen() {
  const router = useRouter();

  const handleLogout = async () => {
    await signOut(auth);
    router.push("/login");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>🎉 Welcome to Campus Event Hub!</Text>
      <TouchableOpacity style={styles.button} onPress={handleLogout}>
        <Text style={styles.buttonText}>Logout</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#007AFF",
    textAlign: "center",
  },
  button: {
    backgroundColor: "#FF3B30",
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 10,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
  },
});
