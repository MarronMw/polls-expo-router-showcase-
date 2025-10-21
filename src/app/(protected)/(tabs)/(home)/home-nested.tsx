import React, { useState } from "react";
import { StyleSheet, Text, View, StatusBar, TextInput } from "react-native";
import { Link, Stack, useRouter } from "expo-router";

import Screen from "./../../../../components/Screen";

//defining interface for props
interface GreetingProps {
  name: string;
  level: number;
}

//types for states
type Status = "active" | "inactive" | "pending";
StatusBar.setHidden(true);

export default function HomeNestedScreen() {
  const router = useRouter();
  return (
    <Screen style={styles.container}>
      <Text style={styles.body}>Welcome to the Homey Screen</Text>
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
});
