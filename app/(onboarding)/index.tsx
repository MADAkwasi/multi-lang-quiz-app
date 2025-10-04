import SnapCarouselView from "@/components/snap-carousel";
import { screenData } from "@/constants/onboarding-screen";
import { useThemeColor } from "@/hooks/use-theme-color";
import { useRouter } from "expo-router";
import { useRef, useState } from "react";
import {
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { Button } from "react-native-paper";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";

export default function OnboardingScreen() {
  const [currentStep, setCurrentStep] = useState(0);
  const primaryColor = useThemeColor({}, "primary");
  const secondaryColor = useThemeColor({}, "secondary");
  const router = useRouter();
  const scrollRef = useRef<ScrollView>(null);

  const handleSelectStep = (index: number) => {
    setCurrentStep(index);
    scrollRef.current?.scrollTo({
      x: index * wp("90%"),
      animated: true,
    });
  };

  return (
    <View style={styles.container}>
      <SnapCarouselView setCurrentStep={setCurrentStep} ref={scrollRef}>
        {screenData.map((item, index) => (
          <View key={index} style={styles.body}>
            <View style={styles.imageContainer}>
              <Image style={styles.img} source={item.image} />
            </View>
            <Text style={styles.txt}>{item.text}</Text>
          </View>
        ))}
      </SnapCarouselView>

      <View style={styles.stepsContainer}>
        {screenData.map((_, i) => (
          <Pressable onPress={() => handleSelectStep(i)} key={i}>
            <View
              style={
                i === currentStep
                  ? { ...styles.activeStep, backgroundColor: primaryColor }
                  : styles.steps
              }
            />
          </Pressable>
        ))}
      </View>

      <View style={styles.btnsContainer}>
        <Button
          mode="elevated"
          buttonColor={primaryColor}
          textColor="#fff"
          uppercase
          labelStyle={styles.btnText}
          contentStyle={styles.btnContent}
          onPress={() => router.push("/(onboarding)/get-started")}
        >
          Get Started
        </Button>
        <Button
          mode="elevated"
          buttonColor={secondaryColor}
          textColor={primaryColor}
          uppercase
          labelStyle={styles.btnText}
          contentStyle={styles.btnContent}
        >
          I already have an account
        </Button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: hp("5%"),
    paddingHorizontal: wp("5%"),
  },
  body: {
    width: wp("90%"),
    alignItems: "center",
    justifyContent: "center",
  },
  imageContainer: {
    height: hp("55%"),
    width: wp("80%"),
  },
  img: {
    height: "100%",
    width: "100%",
    resizeMode: "contain",
  },
  txt: {
    fontWeight: "600",
    fontSize: hp("3.5%"),
    textAlign: "center",
    fontFamily: "Alan",
  },
  stepsContainer: {
    flexDirection: "row",
    gap: 10,
    justifyContent: "center",
    marginVertical: hp("3%"),
  },
  steps: {
    height: 10,
    width: 10,
    backgroundColor: "#ddd",
    borderRadius: 50,
  },
  activeStep: {
    borderRadius: 10,
    width: 35,
    height: 10,
  },
  btnsContainer: {
    marginTop: "auto",
    gap: 20,
  },
  btnContent: {
    paddingVertical: hp(".8%"),
  },
  btnText: {
    fontSize: hp("1.4%"),
    fontFamily: "Alan",
  },
});
