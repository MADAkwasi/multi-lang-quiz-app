import { Stack } from "expo-router";

export default function OnboardingLayout() {
  return (
    <Stack
      screenOptions={{
        headerShown: false,
        contentStyle: { backgroundColor: "#fff" },
      }}
    >
      <Stack.Screen name="index" />
      <Stack.Screen name="get-started" />
      {/* <Stack.Screen name="sign-in" />
      <Stack.Screen name="sign-up" /> */}
    </Stack>
  );
}
