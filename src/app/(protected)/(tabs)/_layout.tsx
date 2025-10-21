import { Stack, Tabs } from "expo-router";
import React from "react";

import { Ionicons } from "@expo/vector-icons";

export default function RootLayout() {
  return (
    <Tabs
      screenOptions={{
        headerTitleAlign: "center",
        tabBarActiveTintColor: "#4c4c4c",
        tabBarInactiveTintColor: "white",
        tabBarShowLabel: false,
        tabBarStyle: { backgroundColor: "tomato" },
      }}
      backBehavior="order"
    >
      <Tabs.Screen
        name="(home)"
        options={{
          popToTopOnBlur: true,
          tabBarIcon: ({ size, color }) => (
            <Ionicons name="home" size={size} color={color} />
          ),
          headerShown: false,
        }}
      />

      <Tabs.Screen
        name="second"
        options={{
          tabBarIcon: ({ size, color }) => (
            <Ionicons name="albums" size={30} color={color} />
          ),
          headerShown: false,
          tabBarBadge: 3,
        }}
      />

      <Tabs.Screen
        name="third"
        options={{
          tabBarIcon: ({ size, color }) => (
            <Ionicons name="ellipsis-horizontal" size={size} color={color} />
          ),
          tabBarLabel: "settings",
        }}
      />
    </Tabs>
  );
}
