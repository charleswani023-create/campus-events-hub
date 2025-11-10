import { useState } from "react";
import {
  FlatList,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from "react-native";

export default function AnnouncementsScreen() {
  const [announcement, setAnnouncement] = useState("");
  const [list, setList] = useState([]);

  // Handle new announcement post
  const handlePost = () => {
    if (!announcement.trim()) return;

    const newAnnouncement = {
      id: Date.now().toString(),
      text: announcement,
      time: new Date().toLocaleString(), // adds date & time
    };

    setList([newAnnouncement, ...list]); // prepend new one
    setAnnouncement("");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>📢 Campus Announcements</Text>

      <TextInput
        placeholder="Write an announcement..."
        value={announcement}
        onChangeText={setAnnouncement}
        style={styles.input}
        multiline
      />

      <TouchableOpacity style={styles.postButton} onPress={handlePost}>
        <Text style={styles.postButtonText}>Post Announcement</Text>
      </TouchableOpacity>

      {list.length === 0 ? (
        <Text style={styles.emptyText}>No announcements yet.</Text>
      ) : (
        <FlatList
          data={list}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View style={styles.card}>
              <Text style={styles.announcementText}>{item.text}</Text>
              <Text style={styles.timestamp}>🕒 Posted on {item.time}</Text>
            </View>
          )}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#F8F9FB",
  },
  title: {
    fontSize: 22,
    fontWeight: "700",
    color: "#333",
    textAlign: "center",
    marginBottom: 15,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    padding: 10,
    fontSize: 16,
    backgroundColor: "#fff",
    marginBottom: 10,
  },
  postButton: {
    backgroundColor: "#4CAF50",
    paddingVertical: 12,
    borderRadius: 8,
    marginBottom: 15,
  },
  postButtonText: {
    color: "#fff",
    textAlign: "center",
    fontSize: 16,
    fontWeight: "600",
  },
  emptyText: {
    textAlign: "center",
    marginTop: 50,
    color: "#888",
    fontSize: 16,
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 15,
    marginBottom: 10,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 2,
  },
  announcementText: {
    fontSize: 16,
    color: "#333",
    marginBottom: 6,
  },
  timestamp: {
    fontSize: 12,
    color: "#777",
    textAlign: "right",
  },
});
