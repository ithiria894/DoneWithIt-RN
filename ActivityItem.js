import React, { useContext, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Modal,
  TouchableOpacity,
  Button,
} from "react-native";
import { ActivityContext } from "./ActivityContext";
import ActivityForm from "./ActivityForm";

const ActivityItem = ({ activity }) => {
  const { removeActivity, editActivity } = useContext(ActivityContext);
  const [modalVisible, setModalVisible] = useState(false);

  const handleRemove = () => {
    removeActivity(activity.id);
  };

  const handleSubmit = (newActivity) => {
    editActivity(activity.id, newActivity);
    setModalVisible(false);
  };

  return (
    <TouchableOpacity onPress={() => setModalVisible(true)}>
      <View style={styles.container}>
        <View style={styles.content}>
          <Text style={styles.title}>Title: {activity.title} </Text>
          <Text>Detail: {activity.description}</Text>
          <Text>Location: {activity.address}</Text>
          <Text>Time: {activity.startTime}  ~  {activity.endTime}</Text>
          {/* <Text>Repeating: {activity.repeating ? "Yes" : "No"}</Text> */}
          {/* <Text>Alarm: {activity.alarm}</Text> */}
          {/* <Text>Created: {activity.createdTime}</Text> */}
        </View>
        <View>
          <Button title="Delete" color="red" onPress={handleRemove} />
        </View>
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => setModalVisible(false)}
        >
          <View style={styles.modalContainer}>
            <ActivityForm
              initialActivity={activity}
              onSubmit={handleSubmit}
              onCancel={() => setModalVisible(false)}
            />
          </View>
        </Modal>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10,
    // marginVertical: 5,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
  },
  content: {
    flex: 1,
  },
  title: {
    fontSize: 12,
    fontWeight: "bold",
    textDecorationLine: "underline",
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
});

export default ActivityItem;
