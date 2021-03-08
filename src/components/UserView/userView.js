import React, { useState } from "react";
import { FontAwesome } from "@expo/vector-icons";
import { View, Text, Image, TouchableOpacity } from "react-native";
import PropTypes from "prop-types";
import ExpandView from "../ExpandView/expandView";
import { styles } from "./styles";

const UserView = ({ user }) => {
  const [expand, setExpand] = useState(false);
  const [following, setFollowing] = useState(false);
  const [block, setBlock] = useState(false);

  return (
    <TouchableOpacity
      disabled={block}
      onPress={() => setExpand(!expand)}
      style={block ? styles.disable : styles.container}>
      {following ? (
        <Text style={styles.followLabel} testID='followingLabel'>
          Following
        </Text>
      ) : null}

      <View style={styles.main}>
        <Image
          style={styles.profileImage}
          source={{ uri: user.profile_image }}
        />
        <Text style={styles.displayName}>
          <FontAwesome style={styles.icon} name={"user"} />
          {`  ${user.display_name}`}
        </Text>
        <Text style={styles.scoreLabel}>
          <FontAwesome name={"trophy"} /> {user.reputation}
        </Text>
      </View>
      <Text style={styles.location}>
        <FontAwesome style={{ fontSize: 16 }} name={"map-marker"} />
        {user.location ? `  ${user.location}` : "  Unknown"}
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

UserView.propTypes = {
  user: PropTypes.object.isRequired,
};

export default UserView;
