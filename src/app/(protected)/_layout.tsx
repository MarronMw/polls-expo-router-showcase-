import { Redirect, Stack } from "expo-router";
import React, { useContext } from "react";
import { AuthContext } from "../../utils/aunthContext";

export const unstable_settings = {
  // Ensure that the layout is always re-rendered on navigation
  revalidate: "always",
};

function ProtectedLayOut() {
  const aunthState = useContext(AuthContext);
  console.log(
    "isReady:",
    aunthState.isReady,
    "isLoggedIn:",
    aunthState.isLoggedIn
  );
  if (!aunthState.isReady) {
    return null; //or a loading spinnerc
  }
  if (!aunthState.isLoggedIn) {
    return <Redirect href="/login" />;
  }
  return (
    <Stack>
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
    </Stack>
  );
}

export default ProtectedLayOut;
