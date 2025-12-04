import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import { useFonts } from "expo-font";
import { StatusBar } from "expo-status-bar";
import { PaperProvider } from "react-native-paper";
import "react-native-reanimated";

import { useColorScheme } from "@/hooks/use-color-scheme";
import OnboardingLayout from "./(onboarding)/_layout";

export default function RootLayout() {
  const colorScheme = useColorScheme();

  const [fontsLoaded] = useFonts({
    Alan: require("@/assets/fonts/AlanSans-Regular.ttf"),
    AlanBold: require("@/assets/fonts/AlanSans-Bold.ttf"),
  });

  return (
    <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
      <PaperProvider>
        <OnboardingLayout />
        <StatusBar style="auto" />
      </PaperProvider>
    </ThemeProvider>
  );
}
