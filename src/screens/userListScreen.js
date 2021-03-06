import React, { useEffect, useState } from "react";
import { View, StyleSheet, Text, Image, FlatList } from "react-native";
import UserView from "../components/userView";
import usersData from "../hooks/usersData";

const UserListScreen = (props) => {
  const [fetchUsers, users, errorMessage] = usersData();

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <FlatList
      style={styles.container}
      data={users}
      keyExtractor={(user) => user.account_id}
      renderItem={({ item }) => {
        return <UserView user={item} />;
      }}
    />
  );
};

const styles = StyleSheet.create({
  container: { backgroundColor: "#F9F8FF", flexDirection: "column" },
});

export default UserListScreen;
