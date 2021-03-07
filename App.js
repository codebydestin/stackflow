import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import UserListScreen from "./src/screens/userListScreen";

const navigator = createStackNavigator(
  {
    UserList: UserListScreen,
  },
  {
    initialRouteName: "UserList",
    defaultNavigationOptions: {
      title: "StackFlow",
      headerStyle: { backgroundColor: "#6648C4" },
      headerTintColor: "#fff",
      headerTitleStyle: {
        fontWeight: "bold",
      },
    },
  }
);

export default createAppContainer(navigator);
