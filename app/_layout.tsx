import { Stack } from "expo-router";
import React, { useState } from "react";
import { View } from "react-native";

export default function RootLayout() {
  return <RootLayoutNav />;
}
function RootLayoutNav() {
  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <>
      {loggedIn ? (
        <View></View>
      ) : (
        <Stack screenOptions={{ headerShown: false }}>
          <Stack.Screen name="index" />
          <Stack.Screen name="(routes)/welcome-intro" />
          <Stack.Screen name="(routes)/login" />
          <Stack.Screen name="(routes)/sign-up" />
          <Stack.Screen name="(routes)/forgot-password" />
          <Stack.Screen name="(routes)/verify" />
        </Stack>
      )}
    </>
  );
}
