import { useState } from "react";
import { Alert, Button, StyleSheet, TextInput, View } from "react-native";

export default function AddEventScreen() {
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");

  const handleAddEvent = () => {
    if (!title || !date) {
      Alert.alert("Error", "Please provide event title and date");
      return;
    }
    Alert.alert("Success", `Event "${title}" added on ${date}`);
    setTitle("");
    setDate("");
  };

  return (
    <View style={styles.container}>
      <TextInput placeholder="Event Title" value={title} onChangeText={setTitle} style={styles.input} />
      <TextInput placeholder="Event Date (YYYY-MM-DD)" value={date} onChangeText={setDate} style={styles.input} />
      <Button title="Add Event" onPress={handleAddEvent} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  input: { borderWidth: 1, borderColor: "#ccc", padding: 10, marginVertical: 5 },
});
