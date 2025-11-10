import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import {
  ActivityIndicator,
  Alert,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { auth } from "./config/firebaseConfig";

export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleRegister = async () => {
    if (!email || !password) {
      Alert.alert("Error", "Please fill in both fields.");
      return;
    }

    setLoading(true);
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      Alert.alert("Success 🎉", "Account created successfully! You can now log in.");
    } catch (error) {
      Alert.alert("Registration Error", error.message);
    } finally {
      setLoading(false);
    }
  };

  const handleLogin = async () => {
    if (!email || !password) {
      Alert.alert("Error", "Please enter both email and password.");
      return;
    }

    setLoading(true);
    try {
      await signInWithEmailAndPassword(auth, email, password);
      Alert.alert("Welcome 🎉", "Login successful!");
      // Navigate to the events screen after successful login
      navigation.navigate("EventsScreen");
    } catch (error) {
      Alert.alert("Login Error", error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>🎓 Campus Events Hub</Text>
      <Text style={styles.subtitle}>Login or Register to access events</Text>

      <TextInput
        placeholder="Enter your email"
        value={email}
        onChangeText={setEmail}
        style={styles.input}
        keyboardType="email-address"
        autoCapitalize="none"
      />

      <TextInput
        placeholder="Enter your password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        style={styles.input}
      />

      {loading ? (
        <ActivityIndicator size="large" color="#4CAF50" style={{ marginVertical: 20 }} />
      ) : (
        <>
          <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
            <Text style={styles.buttonText}>Login</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.registerButton} onPress={handleRegister}>
            <Text style={styles.buttonText}>Register</Text>
          </TouchableOpacity>
        </>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 25,
    backgroundColor: "#F4F6F8",
  },
  title: {
    fontSize: 26,
    fontWeight: "700",
    color: "#333",
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: "#666",
    marginBottom: 30,
  },
  input: {
    width: "100%",
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    padding: 12,
    fontSize: 16,
    backgroundColor: "#fff",
    marginBottom: 15,
  },
  loginButton: {
    backgroundColor: "#4CAF50",
    paddingVertical: 12,
    borderRadius: 8,
    width: "100%",
    marginBottom: 10,
  },
  registerButton: {
    backgroundColor: "#2196F3",
    paddingVertical: 12,
    borderRadius: 8,
    width: "100%",
  },
  buttonText: {
    color: "#fff",
    textAlign: "center",
    fontSize: 16,
    fontWeight: "600",
  },
});
