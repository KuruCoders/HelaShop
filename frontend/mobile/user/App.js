import { useFonts } from "expo-font";
import Welcome from "./screens/Welcome";
import fontFamList from "./constants/FontFamil";
import AppStack from "./navigation/AppStack/AppStack";
import AuthStack from "./navigation/AuthStack/AuthStack";
import { PaperProvider } from "react-native-paper";
import { SafeAreaView } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
export default function App() {
  const [loaded, error] = useFonts(fontFamList);
  if (!loaded) {
    return error;
  }

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <PaperProvider>
        <SafeAreaView style={{ flex: 1 }}>
          <AppStack />
          {/* <AuthStack/> */}
        </SafeAreaView>
      </PaperProvider>
    </GestureHandlerRootView>

  );
}
