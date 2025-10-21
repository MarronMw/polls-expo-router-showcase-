import React, { useState } from "react";
import {
  Alert,
  StyleSheet,
  Text,
  View,
  StatusBar,
  TextInput,
  Modal,
} from "react-native";
import { Link, Stack, useRouter } from "expo-router";

import { AppButton } from "./../../../../components/AppButton";
import Screen from "./../../../../components/Screen";

//defining interface for props
interface GreetingProps {
  name: string;
  level: number;
}

//types for states
type Status = "active" | "inactive" | "pending";
StatusBar.setHidden(true);

export default function HomeScreen() {
  const [modaVisible, setModalVisible] = useState(false);
  const handleAlert = () => {
    Alert.alert("Warning", "Are you sure to proceed?", [
      { text: "OK", style: "cancel" },
      { text: "Cancel", style: "destructive" },
    ]);
  };

  const router = useRouter();
  const canGoBack = router.canGoBack();
  return (
    <Screen style={styles.container}>
      <Text style={styles.body}>Welcome to the Homey Screen</Text>
      <Link href={"/home-nested"} push asChild>
        <AppButton title="Go to Home Nested" />
      </Link>
      {canGoBack && <AppButton title="Back" onPress={() => router.back()} />}
      <AppButton title="Alert" onPress={handleAlert} />
      <AppButton title="Modal" onPress={() => setModalVisible(true)} />

      <Modal
        transparent={true}
        visible={modaVisible}
        onRequestClose={() => setModalVisible(false)}
        onShow={() => {
          StatusBar.setHidden(true);
          StatusBar.setBackgroundColor("#4c4c4c");
        }}
      >
        <View style={styles.modal}>
          <View style={styles.stand}>
            <Text style={styles.body}>This is a Modal!</Text>
            <AppButton
              title="Close Modal"
              onPress={() => setModalVisible(false)}
            />
          </View>
        </View>
      </Modal>
    </Screen>
  );
}

const styles = StyleSheet.create({
  body: {
    fontSize: 25,
    color: "#4c4c4c",
    marginBottom: 5,
  },
  container: {
    alignItems: "center",
    justifyContent: "center",
  },
  modal: {
    backgroundColor: "#ccc",
    opacity: 0.9,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  stand: {
    backgroundColor: "white",
    width: 300,
    height: 200,
    position: "absolute",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
  },
});
