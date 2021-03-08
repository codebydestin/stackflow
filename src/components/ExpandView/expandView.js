import React from "react";
import { FontAwesome } from "@expo/vector-icons";
import { View, Text, TouchableOpacity } from "react-native";
import PropTypes from "prop-types";
import { styles } from "./styles";

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
            <FontAwesome name={"user-plus"} />
            {following ? " Unfollow" : " Follow"}
          </Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

ExpandView.propTypes = {
  following: PropTypes.bool.isRequired,
  block: PropTypes.bool.isRequired,
  onChangeBlocked: PropTypes.func.isRequired,
  onChangeFollowing: PropTypes.func.isRequired,
};

export default ExpandView;
