import React, { useState } from "react";
import { SafeAreaView, StyleSheet, View } from "react-native";
import { ActivityProvider } from "./ActivityContext";
import ActivityList from "./ActivityList";
import AddActivity from "./AddActivity";
import Calendar from "./Calendar";
import AddWithChatgpt from "./AddWithChatgpt";

const App = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [calendarHeight, setCalendarHeight] = useState(0);
  const [showAllActivityButtonHeight, setShowAllActivityButtonHeight] =
    useState(0);

  const handleCalendarLayout = (event) => {
    const { height } = event.nativeEvent.layout;
    setCalendarHeight(height);
  };

  const handleShowAllActivityButtonLayout = (event) => {
    const { height } = event.nativeEvent.layout;
    setShowAllActivityButtonHeight(height);
  };

  return (
    <SafeAreaView style={styles.container}>
      <ActivityProvider>
        <View style={styles.content}>
          <View
            onLayout={handleCalendarLayout}
            style={styles.calendarContainer}
          >
            <Calendar
              setSelectedDate={setSelectedDate}
              style={styles.calendar}
            />
          </View>
          <View
            style={[styles.buttonsContainer, { marginTop: calendarHeight }]}
          >
            <AddActivity />
            <AddWithChatgpt onLayout={handleShowAllActivityButtonLayout} />
          </View>
          <View style={styles.activityListContainer}>
            <ActivityList
              selectedDate={selectedDate}
              setSelectedDate={setSelectedDate}
            />
          </View>
        </View>
      </ActivityProvider>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 0,
  },
  content: {
    flex: 1,
  },
  calendarContainer: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
  },
  buttonsContainer: {
    // marginTop will be set dynamically based on calendar height and show all activity button height
    marginTop: 0, // Initial value
    flexDirection: "row",
    justifyContent: "space-evenly", // Evenly space the buttons
  },
  
  activityListContainer: {
    flex: 1,
    marginTop: 10, // Adjust as needed
  },
  buttonGroup: {
    // flexDirection: "row",
    // justifyContent: "space-between",
    // paddingHorizontal: 10,
  },
});

export default App;
