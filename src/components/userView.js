import React, { useState } from "react";
import { FontAwesome } from "@expo/vector-icons";
import { View, StyleSheet, Text, Image, TouchableOpacity } from "react-native";
import ExpandView from "./expandView";

const UserView = ({ user }) => {
  const [expand, setExpand] = useState(false);
  const [following, setFollowing] = useState(false);
  const [block, setBlock] = useState(false);

  return (
    <TouchableOpacity
      disabled={block}
      onPress={() => setExpand(!expand)}
      style={styles.container}>
      {following ? <Text style={styles.followLabel}>Following</Text> : null}

      <View style={styles.main}>
        <Image
          style={styles.profileImage}
          source={{ uri: user.profile_image }}
        />
        <Text style={styles.displayName}>
          <FontAwesome style={styles.icon} name={"user"} /> {user.display_name}
        </Text>
        <Text style={styles.scoreLabel}>
          <FontAwesome name={"trophy"} /> {` ${user.reputation}`}
        </Text>
      </View>
      <Text style={styles.location}>
        <FontAwesome name={"map-marker"} /> {` ${user.location}`}
      </Text>

      {expand ? (
        <ExpandView
          following={following}
          block={block}
          onChangeBlocked={() => {
            setBlock(!block);
            setFollowing(false);
          }}
          onChangeFollowing={() => setFollowing(!following)}
        />
      ) : null}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    borderRadius: 8,
    shadowOffset: { width: 0, height: 10 },
    shadowRadius: 8,
    shadowColor: "#EFEBFA",
    shadowOpacity: 1.0,
    marginHorizontal: 10,
    marginBottom: 10,
  },
  main: {
    flex: 1,
    flexDirection: "row",
    minHeight: 120,
    padding: 15,
    paddingBottom: 0,
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
    flex: 1,
    lineHeight: 24,
  },
  scoreLabel: {
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 4,
    backgroundColor: "#8663e6",
    overflow: "hidden",
    color: "#fff",
  },
  followLabel: {
    backgroundColor: "#EFEBFA",
    margin: 15,
    paddingVertical: 5,
    paddingHorizontal: 10,
    alignSelf: "flex-start",
    fontStyle: "italic",
    borderRadius: 4,
    overflow: "hidden",
  },
  location: {
    marginBottom: 15,
    marginLeft: 125,
    opacity: 0.7,
  },
});

export default UserView;
