import React, { useState } from "react";
import {
  Keyboard,
  TouchableWithoutFeedback,
  ScrollView,
  SafeAreaView,
  View,
  Platform,
} from "react-native";

import { StackNavigationProp } from "@react-navigation/stack";
import globalStyles from "../styles/globalStyle";
import TextInputComponent from "../components/TextInputComponent";
import ButtonComponent from "../components/ButtonComponent";
import { LanguageType } from "../app/models/types/LanguageType";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/store";
import baseStrings from "../styles/baseStrings";
import { useRoute } from "@react-navigation/native";
import { RouterInterface } from "../app/models/RouterInterface";
import { UserInterface } from "../app/models/UserInterface";
import { compareValidation } from "../utils/validation/compareValidation";
import { setSnackbar } from "../redux/slices/appReducer";
import { UserHandler } from "../app/handlers/UserHandler";

interface RegisterViewProps {
  navigation: StackNavigationProp<any>;
}

const RegisterView: React.FC<RegisterViewProps> = (props) => {
  const handlePressOutside = () => {
    Keyboard.dismiss();
  };

  const route = useRoute();

  const params: RouterInterface = route.params
    ? (route.params as RouterInterface)
    : {
        edit: false,
      };

  const language: LanguageType = useSelector(
    (state: RootState) => state.app.language
  );

  const dispatch = useDispatch();

  const userAuth: UserInterface = useSelector(
    (state: RootState) => state.auth.user
  );

  const [user, setUser] = useState<UserInterface>(userAuth);
  const [passwordConfirm, setPasswordConfirm] = useState<string>("");

  return (
    <TouchableWithoutFeedback onPress={Platform.OS !== 'web' ? handlePressOutside : ()=> {}}>
      <SafeAreaView style={globalStyles.container}>
        <ScrollView
          contentContainerStyle={globalStyles.scrollViewContainer}
          automaticallyAdjustKeyboardInsets={true}
        >
          <View
            style={{
              width: "100%",
              height: 400,
              justifyContent: "space-between",
            }}
          >
            <TextInputComponent
              placeholder={baseStrings[language].input.name}
              value={user.name}
              onChangeText={(name: string) => setUser({ ...user, name })}
            />
            <TextInputComponent
              placeholder={baseStrings[language].input.email}
              value={user.email}
              onChangeText={(email: string) => setUser({ ...user, email })}
            />
            <TextInputComponent
              placeholder={baseStrings[language].input.password}
              value={user.password}
              onChangeText={(password: string) =>
                setUser({ ...user, password })
              }
            />
            <TextInputComponent
              placeholder={baseStrings[language].input.confirmPassword}
              value={passwordConfirm}
              onChangeText={setPasswordConfirm}
            />
          </View>

          <View style={globalStyles.bottom}>
            <ButtonComponent
              text={
                params.edit
                  ? baseStrings[language].button.confirm
                  : baseStrings[language].button.save
              }
              action={async () => {
                const passwordValidation = compareValidation(
                  "Senha",
                  user.password || "",
                  passwordConfirm
                );

                if (passwordValidation.status === "success") {
                  const userResponse = await UserHandler(
                    params.edit ? user.id || "" : "",
                    params.edit ? "PUT" : "POST",
                    user
                  );

                  if (userResponse.status === "success") {
                    props.navigation.pop();
                  }
                  dispatch(setSnackbar(userResponse));
                } else {
                  dispatch(setSnackbar(passwordValidation));
                }
              }}
            />
          </View>
        </ScrollView>
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
};

export default RegisterView;
