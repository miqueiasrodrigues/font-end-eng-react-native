import React from 'react';
import { View, ActivityIndicator, StyleSheet } from 'react-native';
import baseColors from '../styles/baseColors';

const LoadingComponent: React.FC = () => (
  <View style={styles.container}>
    <ActivityIndicator size="large" color={baseColors.primaryColors.blue} />
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    color: baseColors.primaryColors.blue
  },
});

export default LoadingComponent;
