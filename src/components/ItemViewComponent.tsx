import React from "react";
import {
  ColorValue,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import baseTypographs from "../styles/baseTypographs";
import baseColors from "../styles/baseColors";

interface ItemViewComponentProps {
  left?: React.ReactNode;
  title: string;
  titleColor?: ColorValue;
  subtitle?: string;
  subtitleColor?: ColorValue;
  subsubtitle?: string;
  subsubTitleColor?: ColorValue;
  right?: React.ReactNode;
  canBeClicked?: boolean;
  backgroundColor?: ColorValue;
  paddingHorizontal?: number;
  paddingVertical?: number;
  action?: () => void;
}

const ItemViewComponent: React.FC<ItemViewComponentProps> = (props) => {
  const canBeClicked: boolean = props.canBeClicked === true;

  return (
    <TouchableOpacity onPress={props.action} disabled={!canBeClicked}>
      <View
        style={{
          width: "100%",
          flexDirection: "row",
          alignItems: "center",
          paddingVertical:
            props.paddingVertical || props.paddingVertical === 0
              ? props.paddingVertical
              : 20,
          backgroundColor: props.backgroundColor,
          paddingHorizontal: props.paddingHorizontal,
          borderRadius: 16,
          overflow: "hidden",
        }}
      >
        {props.left}
        <View
          style={{
            flex: 1,
            marginLeft: props.left ? 10 : 0,
            marginRight: props.left ? 0 : 10,
          }}
        >
          <Text
            style={{
              fontWeight: "bold",
              color: props.titleColor
                ? props.titleColor
                : baseColors.primaryColors.blue,
            }}
          >
            {props.title}
          </Text>
          {props.subtitle && (
            <Text
              style={{
                fontSize: baseTypographs.sizes.medium,
                color: props.subtitleColor
                  ? props.subtitleColor
                  : baseColors.primaryColors.blue,
                paddingTop: 5,
              }}
            >
              {props.subtitle}
            </Text>
          )}
          {props.subsubtitle && (
            <Text
              style={{
                fontSize: baseTypographs.sizes.medium,
                color: props.subsubTitleColor
                  ? props.subsubTitleColor
                  : baseColors.primaryColors.blue,
                paddingTop: 5,
              }}
            >
              {props.subsubtitle}
            </Text>
          )}
        </View>
        {props.right}
      </View>
    </TouchableOpacity>
  );
};

export default ItemViewComponent;
