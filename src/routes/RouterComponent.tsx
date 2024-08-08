import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { ResponseInterface } from "../app/models/ResponseInterface";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SnackbarComponent from "../components/SnackbarComponent";
import LoginView from "../views/LoginView";
import RegisterView from "../views/RegisterView";
import HomeView from "../views/auth/HomeView";
import { HeaderFragment } from "../components/fragments/HeaderFragment";
import MenuSVG from "../../assets/icons/bars-regular.svg";

const RoutesComponent: React.FC = () => {
  const token: string | null = useSelector(
    (state: RootState) => state.auth.token
  );

  const Stack = createNativeStackNavigator();

  const snackbar: ResponseInterface = useSelector(
    (state: RootState) => state.app.snackbar
  );

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={"Login"}>
        <Stack.Screen
          name={"Login"}
          component={LoginView}
          options={{ headerShown: false }}
        />
        <Stack.Screen name={"Register"} component={RegisterView} />
        <Stack.Screen
          name={"Home"}
          component={HomeView}
          options={({ navigation }) =>
            HeaderFragment({
              component: <MenuSVG width={20} height={20} />,
              action: () => {
                navigation.push("Menu");
              },
            })
          }
        />
      </Stack.Navigator>
      <SnackbarComponent response={snackbar} />
    </NavigationContainer>
  );
};

export default RoutesComponent;
