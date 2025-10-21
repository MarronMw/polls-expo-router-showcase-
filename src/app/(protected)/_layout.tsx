import { Redirect, Stack } from "expo-router";
import React, { useContext } from "react";
import { AuthContext } from "../../utils/aunthContext";

// export const unstable_settings = {
//   initialRouteName: "(tabs)", //anchor
// };

export default function ProtectedLayOut() {
  const aunthState = useContext(AuthContext);
  console.log("Auth Ready LogIn:", aunthState.isReady, aunthState.isLoggedIn);
  console.log(" ");

  if (!aunthState.isReady) {
    return null; //or add a loading spinnerc
  }

  if (!aunthState.isLoggedIn) {
    return <Redirect href="/login" />;
  }
  return <Stack screenOptions={{ headerShown: false }} />;
}
