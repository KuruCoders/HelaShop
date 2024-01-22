import { useFonts } from "expo-font";
import Welcome from "./screens/Welcome";
import fontFamList from "./constants/FontFamil";
import { SafeAreaView } from "react-native";
import 'react-native-gesture-handler'
import AppStack from "./navigation/AppStack/AppStack";
export default function App() {
  const [loaded, error] = useFonts(fontFamList);
  if (!loaded) {
    return error;
  }

  return (
    <SafeAreaView className='flex-1'>
      {/* <Welcome/> */}
      <AppStack/>
   </SafeAreaView>
  );
}
