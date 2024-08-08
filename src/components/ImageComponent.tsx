import { DimensionValue, Image, ImageSourcePropType, View } from "react-native";
import React from "react";

interface ImageComponentPorps {
  width: DimensionValue;
  height: DimensionValue;
  source: ImageSourcePropType;
  alt?: string;
}

const ImageComponent: React.FC<ImageComponentPorps> = (props) => {
  return (
    <Image
      style={{
        width: props.width,
        height: props.height,
      }}
      source={props.source}
      alt={props.alt}
      resizeMode="cover"
    />
  );
};

export default ImageComponent;
