import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import UserListScreen from "./src/screens/userListScreen";
import UserDetailScreen from "./src/screens/userDetailScreen";

const navigator = createStackNavigator(
  {
    UserList: UserListScreen,
    UserDetail: UserDetailScreen,
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

//<StatusBar backgroundColor='blue' barStyle='light-content' />
