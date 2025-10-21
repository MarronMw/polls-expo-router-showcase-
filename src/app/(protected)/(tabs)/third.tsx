import React, { useContext, useState } from "react";
import { StyleSheet, Text, View, StatusBar } from "react-native";
import { Link, useRouter } from "expo-router";

import { AppButton } from "./../../../components/AppButton";
import Screen from "../../../components/Screen";
import { AuthContext } from "../../../utils/aunthContext";

//defining interface for props
interface GreetingProps {
  name: string;
  level: number;
}

//types for states
type Status = "active" | "inactive" | "pending";

const Greeting: React.FC<GreetingProps> = ({ name, level }) => {
  const aunthContext = useContext(AuthContext);
  const [enabled, setEnabled] = useState<boolean>(false); //bool
  const [status, setStatus] = useState<Status>("inactive"); //unio type:Custom type
  const [data, setData] = useState<string[]>([]);
  const router = useRouter();
  const canGoBack = router.canGoBack();

  const getExclamationMarks = (num: number) => Array(num + 1).join("!");

  return (
    <Screen style={styles.container}>
      <Text style={styles.body}>
        Greetings from third {name} {getExclamationMarks(level)}
      </Text>
      <Link href={"/"} dismissTo asChild>
        <AppButton title="/Index" />
      </Link>
      {canGoBack && <AppButton title="Back" onPress={() => router.back()} />}
      <AppButton title="Log Out" onPress={aunthContext.logOut} />
    </Screen>
  );
};

StatusBar.setHidden(true);

export default function ThirdScreen() {
  return <Greeting name="maranatha" level={1} />;
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
