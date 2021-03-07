import React from "react";
import { FontAwesome } from "@expo/vector-icons";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";

const ExpandView = ({
  following,
  block,
  onChangeBlocked,
  onChangeFollowing,
}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={[styles.bttn, styles.warningBttn]}
        onPress={onChangeBlocked}>
        <Text style={styles.bttnText}>
          <FontAwesome name={"ban"} /> {block ? "Unblock" : "Block"}
        </Text>
      </TouchableOpacity>

      {block ? null : (
        <TouchableOpacity
          disabled={block}
          style={[styles.bttn, styles.successBttn]}
          onPress={onChangeFollowing}>
          <Text style={styles.bttnText}>
            <FontAwesome name={"user-plus"} />{" "}
            {following ? "Unfollow" : "Follow"}
          </Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
  bttn: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    margin: 15,
    padding: 8,
    borderRadius: 4,
  },
  bttnText: {
    flex: 1,
    color: "#fff",
    textAlign: "center",
  },
  warningBttn: {
    backgroundColor: "#F26647",
  },
  successBttn: {
    backgroundColor: "#45C9B1",
  },
});

export default ExpandView;
