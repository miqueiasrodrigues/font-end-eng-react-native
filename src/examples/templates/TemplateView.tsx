import React from "react";
import {
  Keyboard,
  TouchableWithoutFeedback,
  ScrollView,
  SafeAreaView,
} from "react-native";

import { StackNavigationProp } from "@react-navigation/stack";
import globalStyles from "../../styles/globalStyle";
import { RouterInterface } from "../../app/models/RouterInterface";
import { useRoute } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import { LanguageType } from "../../app/models/types/LanguageType";
import { RootState } from "../../redux/store";

interface TemplateViewProps {
  navigation: StackNavigationProp<any>;
}

const TemplateView: React.FC<TemplateViewProps> = (props) => {
  const handlePressOutside = () => {
    Keyboard.dismiss();
  };

  const routerParam: RouterInterface = {
    edit: false,
  };

  const route = useRoute();

  const params: RouterInterface = route.params
    ? (route.params as RouterInterface)
    : {
        edit: false,
      };

  const dispatch = useDispatch();

  const language: LanguageType = useSelector(
    (state: RootState) => state.app.language
  );

  return (
    <TouchableWithoutFeedback onPress={Platform.OS !== 'web' ? handlePressOutside : null}>>
      <SafeAreaView style={globalStyles.container}>
        <ScrollView
          contentContainerStyle={globalStyles.scrollViewContainer}
          automaticallyAdjustKeyboardInsets={true}
        ></ScrollView>
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
};

export default TemplateView;
