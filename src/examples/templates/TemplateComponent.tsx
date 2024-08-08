import React from "react";
import { StyleSheet, View } from "react-native";

interface TemplateComponentProps {}

const TemplateComponent: React.FC<TemplateComponentProps> = (props) => {
  return <View style={styles.container}></View>;
};

const styles = StyleSheet.create({
  container: {},
});

export default TemplateComponent;
