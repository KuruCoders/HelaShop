import { useFonts } from "expo-font";
import Welcome from "./screens/Welcome";
import fontFamList from "./constants/FontFamil";

export default function App() {
  const [loaded, error] = useFonts(fontFamList);

  if (!loaded) {
    return error;
  }

  return (
    <>
      <Welcome/>
    </>
  );
}
