import { Stack } from "expo-router";
import React from "react";
import AunthProvider from "../utils/aunthContext";

const unstable_settings = {
  initialRouteName: "(protected)",
};

function AunthLayOut() {
  return (
    <AunthProvider>
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="(protected)" />
        <Stack.Screen
          name="login"
          options={{
            animation: "none",
          }}
        />
      </Stack>
    </AunthProvider>
  );
}

export default AunthLayOut;
