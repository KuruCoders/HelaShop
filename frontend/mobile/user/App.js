import { useFonts } from "expo-font";
import Welcome from "./screens/Welcome";
import fontFamList from "./constants/FontFamil";
import AppStack from "./navigation/AppStack/AppStack";
import AuthStack from "./navigation/AuthStack/AuthStack";
import { PaperProvider } from "react-native-paper";
import { GestureHandlerRootView } from "react-native-gesture-handler";
// added to remove the warnig from parallax
import './ignoreWarnings'

export default function App() {
  const [loaded, error] = useFonts(fontFamList);
  if (!loaded) {
    return error;
  }

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <PaperProvider>
          <AppStack />
          {/* <AuthStack/> */}
      </PaperProvider>
    </GestureHandlerRootView>

  );
}
