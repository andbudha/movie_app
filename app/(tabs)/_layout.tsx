import { Tabs } from "expo-router";

import * as React from "react";

const _Layout = () => {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{ headerShown: false, title: "Home" }}
      />
      <Tabs.Screen
        name="saved"
        options={{
          headerShown: true,
          title: "Saved",
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{ headerShown: true, title: "Profile" }}
      />
      <Tabs.Screen
        name="search"
        options={{ headerShown: true, title: "Search" }}
      />
    </Tabs>
  );
};

export default _Layout;
