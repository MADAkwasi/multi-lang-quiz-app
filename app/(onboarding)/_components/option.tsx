import { ThemedText } from "@/components/themed-text";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import { Pressable, StyleSheet, View } from "react-native";
import { heightPercentageToDP as hp } from "react-native-responsive-screen";

interface Props {
  icon: any;
  color: string;
  text: string;
  onPress?: () => void;
}

export default function Option({ icon, color, text, onPress }: Props) {
  return (
    <Pressable android_ripple={{ color: "#ccc" }} onPress={onPress}>
      <View style={styles.optionContainer}>
        <View style={{ ...styles.iconContainer, backgroundColor: color }}>
          <FontAwesome5 name={icon} size={34} color="#eee" />
        </View>
        <ThemedText type="subtitle">{text}</ThemedText>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  optionContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderRadius: 15,
    overflow: "hidden",
    borderColor: "#ccc",
    gap: 25,
  },
  iconContainer: {
    padding: 8,
    width: "27%",
    height: hp("10%"),
    alignItems: "center",
    justifyContent: "center",
  },
});
