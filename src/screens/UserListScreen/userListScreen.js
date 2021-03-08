import React, { useEffect } from "react";
import { FlatList, Text } from "react-native";
import UserView from "../../components/UserView/userView";
import usersData from "../../hooks/usersData";
import { styles } from "./styles";
import { FontAwesome } from "@expo/vector-icons";

const UserListScreen = (props) => {
  const [fetchUsers, users, errorMessage] = usersData();

  useEffect(() => {
    fetchUsers();
  }, []);

  if (errorMessage.length)
    return (
      <Text style={styles.errorText}>
        <FontAwesome name={"warning"} /> {errorMessage}
      </Text>
    );

  return (
    <FlatList
      style={styles.container}
      data={users}
      keyExtractor={(user) => `${user.account_id}`}
      renderItem={({ item }) => {
        return <UserView user={item} />;
      }}
    />
  );
};

export default UserListScreen;
