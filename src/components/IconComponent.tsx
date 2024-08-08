import React from "react";
import { View, TouchableHighlight } from "react-native";


export interface IconInterface {
  component: React.ReactNode;
  action: (value: any) => void;
}

interface IconComponentProps {
  icon: IconInterface;
  padding?: number;
}

const IconComponent: React.FC<IconComponentProps> = (props) => {
  return (
    <TouchableHighlight
      onPress={props.icon?.action}
      style={{
        padding: props.padding || props.padding === 0 ? props.padding : 10,
      }}
    >
      <View>{props.icon.component}</View>
    </TouchableHighlight>
  );
};

export default IconComponent;
