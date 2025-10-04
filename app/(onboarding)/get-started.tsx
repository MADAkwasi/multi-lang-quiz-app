import { ThemedText } from "@/components/themed-text";
import { ACCOUNT_CREATION_STEPS } from "@/constants/account-creation";
import { useThemeColor } from "@/hooks/use-theme-color";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { useRouter } from "expo-router";
import { useState } from "react";
import { Pressable, ScrollView, StyleSheet, View } from "react-native";
import { Button, ProgressBar } from "react-native-paper";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import Option from "./_components/option";

export default function GetStartedScreen() {
  const [currentStep, setCurrentStep] = useState(0);
  const insets = useSafeAreaInsets();
  const router = useRouter();
  const primaryColor = useThemeColor({}, "primary");
  const secondaryColor = useThemeColor({}, "secondary");

  return (
    <ScrollView
      style={[
        styles.container,
        { paddingTop: insets.top, paddingBottom: insets.bottom },
      ]}
      contentContainerStyle={styles.containerContent}
    >
      <View style={styles.header}>
        <Pressable
          onPress={() => router.back()}
          hitSlop={8}
          style={{ position: "absolute", left: 0 }}
        >
          <MaterialCommunityIcons name="arrow-left" size={26} color="black" />
        </Pressable>

        <ProgressBar
          progress={0.2}
          color={primaryColor}
          style={styles.progressBar}
        />
      </View>

      <View style={styles.heading}>
        <ThemedText type="title" style={{ textAlign: "center" }}>
          What type of account do you like to create?
        </ThemedText>
        <ThemedText>You can skip if you're not sure</ThemedText>
      </View>

      <View style={styles.options}>
        {ACCOUNT_CREATION_STEPS[currentStep].options?.map((step) => (
          <Option
            key={step.id}
            text={step.text}
            color={step.color}
            icon={step.icon}
          />
        ))}
      </View>

      <Button
        mode="elevated"
        buttonColor={secondaryColor}
        contentStyle={styles.btnContent}
        labelStyle={styles.btnText}
        style={{ marginTop: "auto", marginBottom: 10 }}
        onPress={() => setCurrentStep(1)}
      >
        Skip
      </Button>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: wp("4%"),
  },
  containerContent: {
    flexGrow: 1,
  },
  progressBar: {
    width: wp("60%"),
    height: 10,
    borderRadius: 10,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginVertical: hp("3%"),
    position: "relative",
  },
  heading: {
    alignItems: "center",
    gap: 12,
    marginVertical: hp("2.5%"),
  },
  options: {
    gap: 12,
    marginVertical: hp("4%"),
  },
  btnContent: {
    paddingVertical: hp(".8%"),
  },
  btnText: {
    fontSize: hp("2.3%"),
    fontFamily: "Alan",
  },
});
