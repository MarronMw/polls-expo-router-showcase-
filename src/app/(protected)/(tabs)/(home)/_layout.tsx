import { Stack, usePathname } from "expo-router";
import React from "react";

function HomeLayOut() {
  const pathname = usePathname();
  return (
    <Stack
      screenOptions={{
        animation: pathname.startsWith("/home") ? "default" : "none",
      }}
    />
  );
}

export default HomeLayOut;
