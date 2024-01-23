import { useFonts } from "expo-font";
import Welcome from "./screens/Welcome";
import fontFamList from "./constants/FontFamil";
import { SafeAreaView } from "react-native";
import 'react-native-gesture-handler'
import AppStack from "./navigation/AppStack/AppStack";
import { PaperProvider } from "react-native-paper";
import AppHeader from "./components/Header/AppHeader";

export default function App() {
  const [loaded, error] = useFonts(fontFamList);
  if (!loaded) {
    return error;
  }

  return (
    <PaperProvider>
      <SafeAreaView className='flex-1'>
        {/* <Welcome/> */}
        <AppStack />
      </SafeAreaView>
    </PaperProvider>

  );
}
