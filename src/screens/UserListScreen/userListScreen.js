import React, { useEffect } from "react";
import { StyleSheet, FlatList } from "react-native";
import UserView from "../../components/UserView/userView";
import usersData from "../../hooks/usersData";
import { styles } from "./styles";

const UserListScreen = (props) => {
  const [fetchUsers, users, errorMessage] = usersData();

  useEffect(() => {
    fetchUsers();
  }, []);

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
