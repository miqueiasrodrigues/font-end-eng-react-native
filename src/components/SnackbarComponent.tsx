import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { useDispatch } from "react-redux";
import { resetSnackbar } from "../redux/slices/appReducer";
import { ResponseInterface } from "../app/models/ResponseInterface";
import baseColors from "../styles/baseColors";
import baseTypographs from "../styles/baseTypographs";

interface SnackbarComponentProps {
  response: ResponseInterface;
}

const SnackbarComponent: React.FC<SnackbarComponentProps> = (props) => {
  const [isVisible, setIsVisible] = React.useState<boolean>(true);
  const dispatch = useDispatch();
  const duration = 1000;

  React.useEffect(() => {
    setIsVisible(true);
    const timer = setTimeout(() => {
      setIsVisible(false);
      dispatch(resetSnackbar());
    }, duration);

    return () => clearTimeout(timer);
  }, [props.response]);

  return (
    <>
      {isVisible && props.response.message !== "" && (
        <View
          style={[
            styles.container,
            {
              backgroundColor:
                props.response.status === "success"
                  ? baseColors.systemColors.success
                  : props.response.status === "error"
                  ? baseColors.systemColors.erro
                  : baseColors.systemColors.alert,
            },
          ]}
        >
          <Text
            style={{
              color:
                props.response.status === "success" ||
                props.response.status === "error"
                  ? baseColors.primaryColors.white
                  : baseColors.primaryColors.black,
            }}
          >
            {props.response.message}
          </Text>
        </View>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 16,
    width: "80%",
    height: 45,
    left: "10%",
    bottom: 150,
    fontSize: baseTypographs.sizes.large,
  },
});

export default SnackbarComponent;
