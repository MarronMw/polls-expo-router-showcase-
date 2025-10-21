import { Redirect, Stack } from "expo-router";
import React from "react";

function RootLayOut() {
  const isAuthenticated = false; //
  if (!isAuthenticated) {
    return <Redirect href="/login" />;
  }
  return (
    <Stack>
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
    </Stack>
  );
}

export default RootLayOut;
