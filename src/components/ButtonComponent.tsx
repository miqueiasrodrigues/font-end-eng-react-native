import React from "react";
import { StyleSheet, TouchableOpacity, Text, ColorValue } from "react-native";
import baseColors from "../styles/baseColors";

interface ButtonComponentProps {
  text?: string;
  backgroundColor?: ColorValue;
  isTextButton?: boolean;
  action?: () => void;
}

const ButtonComponent: React.FC<ButtonComponentProps> = (props) => {
  return (
    <TouchableOpacity
      onPress={props.action}
      style={
        props.isTextButton === true
          ? [
              {
                alignItems: "center",
              },
            ]
          : [
              styles.container,
              {
                backgroundColor: props.backgroundColor
                  ? props.backgroundColor
                  : baseColors.primaryColors.blue,
              },
            ]
      }
    >
      <Text
        style={{
          fontWeight: "bold",
        }}
      >
        {props.text}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    paddingVertical: 28,
    borderRadius: 16,
    width: "100%",
  },
});

export default ButtonComponent;
