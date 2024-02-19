import React, { useState } from "react";
import { SafeAreaView, StyleSheet, View, FlatList } from "react-native";
import { ActivityProvider } from "./ActivityContext";
import ActivityList from "./ActivityList";
import AddActivity from "./AddActivity";
import Calendar from "./Calendar";
import AddWithChatgpt from "./AddWithChatgpt";
import { flattenDiagnosticMessageText } from "typescript";

const App = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [calendarHeight, setCalendarHeight] = useState(0);
  const [showAllActivityButtonHeight, setShowAllActivityButtonHeight] = useState(0);

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
      <View style={styles.content}>
      <FlatList
        data={[{ key: 'content' }]} // Dummy data to render the content
        style={styles.FlatList}
        renderItem={() => (
          <ActivityProvider>
            <View style={styles.content}>
              <View onLayout={handleCalendarLayout} style={styles.calendarContainer}>
                <Calendar setSelectedDate={setSelectedDate} style={styles.calendar} />
              </View>
              <View style={[styles.buttonsContainer, { marginTop: calendarHeight }]}>
                <AddActivity />
                <AddWithChatgpt onLayout={handleShowAllActivityButtonLayout} />
              </View>
              <View style={styles.activityListContainer}>
                <ActivityList selectedDate={selectedDate} setSelectedDate={setSelectedDate} />
              </View>
            </View>
          </ActivityProvider>
        )}
      />
      </View>
    </SafeAreaView>
  );
};

const TopOffset = -25;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  content: {
    flexGrow: 1,
  },
  FlatList: {
    flex: 1,
    top: -25,
  },
  calendarContainer: {
    position: "absolute",
    // top: TopOffset,
    left: 0,
    right: 0,
  },
  buttonsContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    marginTop: 0, // Initial value
    // top: TopOffset,
  },
  activityListContainer: {
    flex: 1,
    marginTop: 10,
    // top: TopOffset,
  },
});

export default App;
