import SnapCarouselView from "@/components/snap-carousel";
import { ThemedText } from "@/components/themed-text";
import { ACCOUNT_CREATION_STEPS } from "@/constants/account-creation";
import { useThemeColor } from "@/hooks/use-theme-color";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { useRouter } from "expo-router";
import { useRef, useState } from "react";
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
  const scrollRef = useRef<ScrollView>(null);
  const insets = useSafeAreaInsets();
  const router = useRouter();
  const primaryColor = useThemeColor({}, "primary");
  const secondaryColor = useThemeColor({}, "secondary");
  const [userAccountType, setUserAccountType] = useState("");

  const handleSelectStep = (accountType: string) => {
    const nextStep = currentStep + 1;
    setCurrentStep(nextStep);

    scrollRef.current?.scrollTo({
      x: nextStep * wp("90%"),
      animated: true,
    });

    setUserAccountType(accountType);
  };

  const handleSkip = () => {
    const nextStep = currentStep + 1;
    if (nextStep < ACCOUNT_CREATION_STEPS.length) {
      setCurrentStep(nextStep);
      scrollRef.current?.scrollTo({
        x: nextStep * wp("90%"),
        animated: true,
      });
    }
  };

  const handleRouteBack = () => {
    const prevStep = currentStep - 1;
    if (currentStep > 0) {
      setCurrentStep(prevStep);
      scrollRef.current?.scrollTo({
        x: prevStep * wp("90%"),
        animated: true,
      });
    } else router.back();
  };

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
          onPress={handleRouteBack}
          hitSlop={8}
          style={{ position: "absolute", left: 0 }}
        >
          <MaterialCommunityIcons name="arrow-left" size={26} color="black" />
        </Pressable>

        <ProgressBar
          progress={(currentStep + 1) / ACCOUNT_CREATION_STEPS.length}
          color={primaryColor}
          style={styles.progressBar}
        />
      </View>

      <SnapCarouselView ref={scrollRef} isSwipeable={false}>
        {ACCOUNT_CREATION_STEPS.map((step) => (
          <View style={styles.mainContent} key={step.id}>
            <View style={styles.heading}>
              <ThemedText type="title" style={{ textAlign: "center" }}>
                {step.title}
              </ThemedText>
              <ThemedText>{step.subtitle}</ThemedText>
            </View>

            <View style={styles.options}>
              {step.options?.map((step) => (
                <Option
                  key={step.id}
                  text={step.text}
                  color={step.color}
                  icon={step.icon}
                  onPress={() => handleSelectStep(step.text)}
                />
              ))}
            </View>
          </View>
        ))}
      </SnapCarouselView>

      <Button
        mode="elevated"
        buttonColor={secondaryColor}
        contentStyle={styles.btnContent}
        labelStyle={styles.btnText}
        style={{ marginTop: "auto", marginBottom: 10 }}
        onPress={handleSkip}
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
  mainContent: {
    alignItems: "center",
    backgroundColor: "#fff",
    width: wp("90%"),
    paddingHorizontal: wp("2%"),
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
    width: "100%",
  },
  btnContent: {
    paddingVertical: hp(".8%"),
  },
  btnText: {
    fontSize: hp("2.3%"),
    fontFamily: "Alan",
  },
});
