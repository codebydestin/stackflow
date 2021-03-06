import React, { Component } from "react";
import { FontAwesome } from "@expo/vector-icons";
import {
  View,
  StyleSheet,
  Text,
  Image,
  FlatList,
  TouchableOpacity,
} from "react-native";

const UserView = ({ user }) => {
  console.log(user);
  return (
    <TouchableOpacity activeOpacity={1}>
      <View style={styles.container}>
        <Image
          style={styles.profileImage}
          source={{ uri: user.profile_image }}
        />
        <Text style={styles.displayName}>
          <FontAwesome style={styles.icon} name={"user"} /> {user.display_name}
        </Text>
        <Text style={styles.score}>
          <FontAwesome name={"trophy"} /> {user.reputation}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    minHeight: 150,
    margin: 10,
    backgroundColor: "#fff",
    borderRadius: 12,
    shadowOffset: { width: 0, height: 10 },
    shadowRadius: 12,
    shadowColor: "#EFEBFA",
    shadowOpacity: 1.0,
    padding: 15,
    alignItems: "center",
  },
  icon: { fontSize: 18, marginRight: 20 },
  profileImage: {
    width: 88,
    height: 88,
    borderRadius: 50,
    marginRight: 20,
  },
  displayName: {
    fontWeight: "bold",
    fontSize: 18,
    color: "#211442",
    flex: 2,
  },
  score: {
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#d1c7ed",
  },
});

export default UserView;
