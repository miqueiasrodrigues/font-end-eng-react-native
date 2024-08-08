import { FlexAlignType, View } from "react-native";

import baseColors from "../../styles/baseColors";
import IconComponent, { IconInterface } from "../../components/IconComponent";
import { NativeStackNavigationOptions } from "@react-navigation/native-stack";

export const HeaderFragment = (
  menu: IconInterface,
): NativeStackNavigationOptions => {
  return {
    headerRight: () => (
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent:"flex-end",
          width: 90,
          backgroundColor:"orange"
        }}
      >
        {<IconComponent icon={menu} />}
      </View>
    ),
  };
};
