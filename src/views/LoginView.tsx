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
import baseStrings from "../styles/baseStrings";
import { useDispatch, useSelector } from "react-redux";
import { LanguageType } from "../app/models/types/LanguageType";
import { RootState } from "../redux/store";
import { SessionInterface } from "../app/models/SessionInterface";
import defaultSession from "../data/defaultSession";
import { SessionHandler } from "../app/handlers/SessionHandler";
import { setSnackbar } from "../redux/slices/appReducer";
import { setToken } from "../redux/slices/authReducer";

interface LoginViewProps {
  navigation: StackNavigationProp<any>;
}

const LoginView: React.FC<LoginViewProps> = (props) => {
  const dispatch = useDispatch();

  const handlePressOutside = () => {
    Keyboard.dismiss();
  };

  const [session, setSession] = useState<SessionInterface>(defaultSession);

  const language: LanguageType = useSelector(
    (state: RootState) => state.app.language
  );

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
              height: 180,
              justifyContent: "space-between",
            }}
          >
            <TextInputComponent
              placeholder={baseStrings[language].input.email}
              value={session.email}
              onChangeText={(email: string) =>
                setSession({ ...session, email })
              }
            />
            <TextInputComponent
              placeholder={baseStrings[language].input.password}
              value={session.password}
              onChangeText={(password: string) =>
                setSession({ ...session, password })
              }
            />
          </View>
          <View style={globalStyles.bottom}>
            <View style={globalStyles.doubleButton}>
              <ButtonComponent
                text={baseStrings[language].button.register}
                isTextButton={true}
                action={() => {
                  props.navigation.push("Register");
                }}
              />
              <ButtonComponent
                text={baseStrings[language].button.login}
                action={async () => {
                  const sessionResponse = await SessionHandler(session);
                 
                  if (sessionResponse.status === "success") {
                    props.navigation.replace("Home");
                    dispatch(setToken(sessionResponse.data));
                  }
                  props.navigation.replace("Home");
                  dispatch(setSnackbar(sessionResponse));
                }}
                
              />
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
};

export default LoginView;
