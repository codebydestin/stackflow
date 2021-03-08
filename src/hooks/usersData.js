import React, { useState } from "react";
import client from "../services/client";

export default () => {
  const [users, setUsers] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");

  const fetchUsers = async () => {
    try {
      const { data } = await client.get("/users", {
        params: {
          pageSize: 20,
          order: "desc",
          sort: "reputation",
          site: "stackoverflow",
        },
      });
      setUsers(data.items);
    } catch (err) {
      console.log("Found Error: ", err);
      setErrorMessage("Could not load users..");
    }
  };

  return [fetchUsers, users, errorMessage];
};
