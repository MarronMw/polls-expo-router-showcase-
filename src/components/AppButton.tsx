import React from "react";
import {
  TouchableOpacity,
  TouchableOpacityProps,
  StyleSheet,
  Text,
  View,
} from "react-native";

type AppButtonProps = TouchableOpacityProps & {
  title?: string;
  onPress?: () => void;
};

export const AppButton = React.forwardRef<
  React.ComponentRef<typeof TouchableOpacity>,
  AppButtonProps
>(({ title, onPress, ...rest }, ref) => {
  return (
    <View style={styles.button}>
      <TouchableOpacity onPress={onPress} {...rest}>
        <Text style={styles.txt}>{title}</Text>
      </TouchableOpacity>
    </View>
  );
});

const styles = StyleSheet.create({
  button: {
    borderWidth: 1,
    borderColor: "tomato",
    borderRadius: 35,
    width: "100%",
  },
  txt: {
    fontSize: 18,
    color: "tomato",
    textAlign: "center",
    padding: 10,
  },
});
