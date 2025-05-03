import { styles } from "@/styles/onboarding/onboarding";
import { Nunito_400Regular, Nunito_700Bold } from "@expo-google-fonts/nunito";
import { Raleway_700Bold, useFonts } from "@expo-google-fonts/raleway";
import { LinearGradient } from "expo-linear-gradient";
import { router } from "expo-router";
import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";

export default function OnBoardingScreen() {
  const [fontLoaded, fontError] = useFonts({
    Raleway_700Bold,
    Nunito_400Regular,
    Nunito_700Bold,
  });
  if (!fontLoaded && !fontError) {
    return null;
  }
  return (
    <LinearGradient
      colors={["#E53CF9", "#F6F7F9"]}
      style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
    >
      <View>
        <Image source={require("@/assets/logo.png")} style={styles.logo} />
        <Image
          source={require("@/assets/onboarding/shape_9.png")}
          style={styles.logo}
        />
      </View>
      <View style={styles.titleWrapper}>
        <Image
          style={styles.titleTextShape1}
          source={require("@/assets/onboarding/shape_3.png")}
        />
        <Text style={[styles.titleText, { fontFamily: "Raleway_700Bold" }]}>
          Start Learning With
        </Text>
        <Image
          style={styles.titleTextShape2}
          source={require("@/assets/onboarding/shape_2.png")}
        />
      </View>
      <View>
        <Image
          style={styles.titleShape3}
          source={require("@/assets/onboarding/shape_6.png")}
        />
        <Text style={[styles.titleText, { fontFamily: "Raleway_700Bold" }]}>
          Codemy
        </Text>
      </View>
      <View style={styles.dscpWrapper}>
        <Text style={[styles.dscpText, { fontFamily: "Nunito_400Regular" }]}>
          Eat, Sleep, Code Repeat
        </Text>
      </View>
      <TouchableOpacity
        style={styles.buttonWrapper}
        onPress={() => router.push("/(routes)/welcome-intro")}
      >
        <Text style={[styles.buttonText, { fontFamily: "Nunito_700Bold" }]}>
          Getting Started
        </Text>
      </TouchableOpacity>
    </LinearGradient>
  );
}
