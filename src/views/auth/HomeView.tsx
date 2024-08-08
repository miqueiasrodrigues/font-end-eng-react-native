import React from "react";
import {
  Keyboard,
  TouchableWithoutFeedback,
  ScrollView,
  SafeAreaView,
  Platform,
  TouchableOpacity,
  View,
} from "react-native";

import { StackNavigationProp } from "@react-navigation/stack";
import globalStyles from "../../styles/globalStyle";
import { RouterInterface } from "../../app/models/RouterInterface";
import { useRoute } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import { LanguageType } from "../../app/models/types/LanguageType";
import { RootState } from "../../redux/store";

interface HomeViewProps {
  navigation: StackNavigationProp<any>;
}

const HomeView: React.FC<HomeViewProps> = (props) => {
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
    <TouchableWithoutFeedback
      onPress={Platform.OS !== "web" ? handlePressOutside : () => {}}
    >
      <SafeAreaView style={globalStyles.container}>
        <ScrollView
          contentContainerStyle={globalStyles.scrollViewContainer}
          automaticallyAdjustKeyboardInsets={true}
        >
          <View
            style={{
              width: "100%",
              flex:1,
              justifyContent: "space-between",
            }}
          >
            <TouchableOpacity
              onPress={() => {}}
              style={{
                width: 80,
                height: 80,
                backgroundColor: "red",
                borderRadius: 50,
                position: "absolute",
                bottom: 0,
                right: 0
              }}
            ></TouchableOpacity>
          </View>
        </ScrollView>
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
};

export default HomeView;
