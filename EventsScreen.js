import { useState } from "react";
import { FlatList, ScrollView, StyleSheet, Text, View } from "react-native";
import { Calendar } from "react-native-calendars";

const EventsScreen = () => {
  const [selectedDate, setSelectedDate] = useState("");

  const events = [
    { id: "1", name: "Orientation Ceremony", date: "2026-08-05", location: "Conference Hall" },
    { id: "2", name: "Freshers' Ball", date: "2025-01-15", location: "Graduation Square" },
    { id: "3", name: "Tech Innovators Conference", date: "2026-08-22", location: "Engineering Block" },
    { id: "4", name: "Campus Crusade", date: "2026-09-25", location: "Advent Of Christ Chapel" },
    { id: "5", name: "Graduation Ceremony", date: "2025-11-27", location: "Graduation Square" },
    { id: "6", name: "Cultural Gala", date: "2025-11-20", location: "Campus Ark" },
    { id: "7", name: "Science & Innovation Fair", date: "2026-03-10", location: "University Studium" },
    { id: "8", name: "Sports Day", date: "2025-11-20", location: "University Stadium" },
    { id: "9", name: "Music & Arts Festival", date: "2026-04-02", location: "Conference Hall" },
    { id: "10", name: "MUSSUSA HandOver Ceremony", date: "2025-11-15", location: "Conference Hall" },
    { id: "11", name: "MUWSA HandOver Ceremony", date: "2025-11-18", location: "Conference Hall" },
    { id: "12", name: "BASAMU HandOver Ceremony", date: "2025-11-20", location: "Conference Hall" },
    { id: "13", name: "LUO HandOver Ceremony", date: "2025-11-25", location: "Conference Hall" },
    { id: "14", name: "Open Campaign For Guild Leader", date: "2026-03-15", location: "Conference Hall" },
    { id: "15", name: "Election Of Guild Leader", date: "2026-03-19", location: "Conference Hall" },
    { id: "16", name: "Launching Of Senate Building", date: "2026-07-19", location: "Graduation Square" },
     { id: "17", name: "Vice Chancelor's Felloship", date: "2026-10-31", location: "Conference Hall" },
      { id: "18", name: "Launching Of Addvent Of Christ Chapel", date: "2026-07-19", location: "NTC-MUNI SITE" },
       { id: "19", name: "Muni Ayivu Sudents Association(MUASA) Handover", date: "2025-11-20", location: "Graduation Square" },
        { id: "20", name: "Muni Madi Students Association(MUMSA) HandOver", date: "2026-07-19", location: "Graduation Square" },
     
  ];

  // Mark the calendar with event dates
  const markedDates = events.reduce((acc, event) => {
    acc[event.date] = { marked: true, dotColor: "blue" };
    return acc;
  }, {});

  if (selectedDate) {
    markedDates[selectedDate] = { selected: true, selectedColor: "#4CAF50" };
  }

  // Filter events by selected date
  const filteredEvents = selectedDate
    ? events.filter((event) => event.date === selectedDate)
    : events;

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>📅 Campus Events Calendar</Text>

      <Calendar
        onDayPress={(day) => setSelectedDate(day.dateString)}
        markedDates={markedDates}
        theme={{
          selectedDayBackgroundColor: "#4CAF50",
          todayTextColor: "#FF5722",
          arrowColor: "#4CAF50",
          monthTextColor: "#000",
          textMonthFontWeight: "bold",
        }}
        style={styles.calendar}
      />

      <Text style={styles.subtitle}>
        {selectedDate
          ? `🎉 Events on ${selectedDate}`
          : "🎉 All Upcoming Events"}
      </Text>

      {filteredEvents.length > 0 ? (
        <>
          <View style={styles.tableHeader}>
            <Text style={[styles.tableCell, styles.headerCell, { flex: 0.2 }]}>S/N</Text>
            <Text style={[styles.tableCell, styles.headerCell, { flex: 0.6 }]}>Event Name</Text>
            <Text style={[styles.tableCell, styles.headerCell, { flex: 0.4 }]}>Date</Text>
            <Text style={[styles.tableCell, styles.headerCell, { flex: 0.6 }]}>Location</Text>
          </View>

          <FlatList
            data={filteredEvents}
            keyExtractor={(item) => item.id}
            renderItem={({ item, index }) => (
              <View
                style={[
                  styles.tableRow,
                  { backgroundColor: index % 2 === 0 ? "#f9f9f9" : "#fff" },
                ]}
              >
                <Text style={[styles.tableCell, { flex: 0.2 }]}>{index + 1}</Text>
                <Text style={[styles.tableCell, { flex: 0.6 }]}>{item.name}</Text>
                <Text style={[styles.tableCell, { flex: 0.4 }]}>{item.date}</Text>
                <Text style={[styles.tableCell, { flex: 0.6 }]}>{item.location}</Text>
              </View>
            )}
          />
        </>
      ) : (
        <Text style={styles.noEvents}>😔 No events found for this date.</Text>
      )}
    </ScrollView>
  );
};

export default EventsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F4F6F8",
    padding: 15,
  },
  title: {
    fontSize: 22,
    fontWeight: "700",
    marginBottom: 15,
    color: "blue",
    textAlign: "center",
  },
  calendar: {
    borderRadius: 10,
    elevation: 2,
    marginBottom: 20,
  },
  subtitle: {
    fontSize: 18,
    fontWeight: "600",
    marginVertical: 10,
    color: "blue",
    textAlign: "center",
  },
  tableHeader: {
    flexDirection: "row",
    backgroundColor: "#4CAF50",
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
    paddingVertical: 8,
    marginBottom: 5,
  },
  tableRow: {
    flexDirection: "row",
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#e0e0e0",
  },
  tableCell: {
    textAlign: "center",
    fontSize: 14,
    color: "#333",
  },
  headerCell: {
    color: "#fff",
    fontWeight: "bold",
  },
  noEvents: {
    textAlign: "center",
    fontSize: 16,
    color: "#888",
    marginTop: 20,
  },
});
