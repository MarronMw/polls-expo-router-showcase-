import React, { useState } from "react";
import { StyleSheet, Text, View, StatusBar } from "react-native";
import { Link, useLocalSearchParams, useRouter } from "expo-router";

import { AppButton } from "./../../../../components/AppButton";
import Screen from "./../../../../components/Screen";

//defining interface for props
interface GreetingProps {
  name: string;
  level: number;
}

//types for states
type Status = "active" | "inactive" | "pending";

const Greeting: React.FC<GreetingProps> = ({ name, level }) => {
  const [enabled, setEnabled] = useState<boolean>(false); //bool
  const [status, setStatus] = useState<Status>("inactive"); //unio type:Custom type
  const [data, setData] = useState<string[]>([]);
  const router = useRouter();
  const canGoBack = router.canGoBack();

  const getExclamationMarks = (num: number) => Array(num + 1).join("!");

  return (
    <Screen style={styles.container}>
      <Text style={styles.body}>
        Greetings from second {name} {getExclamationMarks(level)}
      </Text>
      <Link href={"/third"} push asChild>
        <AppButton title="/Third" />
      </Link>
      {canGoBack && <AppButton title="Back" onPress={() => router.back()} />}
    </Screen>
  );
};

StatusBar.setHidden(true);

export default function SecondScreen() {
  const params = useLocalSearchParams<{ name: string }>();
  return <Greeting name={params.name} level={1} />;
}

const styles = StyleSheet.create({
  body: {
    fontSize: 25,
    textAlign: "center",
    color: "#4c4c4c",
    marginBottom: 5,
  },
  container: {
    alignItems: "center",
    justifyContent: "center",
  },
});
