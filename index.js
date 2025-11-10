import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { useEffect, useState } from "react";
import AddEventScreen from "./AddEventScreen";
import AnnouncementsScreen from "./AnnouncementsScreen";
import { auth } from "./config/firebaseConfig";
import EventsScreen from "./EventsScreen";
import LoginScreen from "./login";

const Tab = createBottomTabNavigator();

export default function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((u) => setUser(u));
    return unsubscribe;
  }, []);

  if (!user) {
    return <LoginScreen />;
  }

  return (
    <Tab.Navigator>
      <Tab.Screen name="Events" component={EventsScreen} />
      <Tab.Screen name="Add Event" component={AddEventScreen} />
      <Tab.Screen name="Announcements" component={AnnouncementsScreen} />
    </Tab.Navigator>
  );
}
