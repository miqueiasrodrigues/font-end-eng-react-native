import React from "react";
import { StyleSheet, TextInput, View } from "react-native";

interface TextInputComponentProps {
  placeholder?: string;
  value?: any;
  editable?: boolean;
  onChangeText?: (e: any) => void;
}

const TextInputComponent: React.FC<TextInputComponentProps> = (props) => {
  return (
    <TextInput
      style={[styles.container, {}]}
      placeholder={props.placeholder}
      value={props.value}
      editable={props.editable}
      onChangeText={props.onChangeText}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "yellow",
    width: "100%",
    paddingVertical: 22,
    borderRadius: 16,
    paddingHorizontal: 20,
  },
});

export default TextInputComponent;
