import { ThemedText } from "@/components/themed-text";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Pressable, StyleSheet, View } from "react-native";
import { heightPercentageToDP as hp } from "react-native-responsive-screen";

interface Props {
  icon: any;
  color: string;
  text: string;
}

export default function Option({ icon, color, text }: Props) {
  return (
    <Pressable>
      <View style={styles.optionContainer}>
        <View style={{ ...styles.iconContainer, backgroundColor: color }}>
          <FontAwesome name={icon} size={34} color="#eee" />
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
