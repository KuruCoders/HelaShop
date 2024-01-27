import { View,TouchableNativeFeedback } from "react-native";
import { Ionicons } from '@expo/vector-icons'

export default function FabCustom({handleAdd}) {
  return (
    <View className="absolute bottom-5 right-5 rounded-xl bg-black overflow-hidden" style={{ elevation: 9 }}>
      <TouchableNativeFeedback background={TouchableNativeFeedback.Ripple('grey')} onPress={()=>{handleAdd()}}>
        <View className="p-3 flex justify-center items-center">
          <Ionicons name="add-outline" size={33} color={'white'} />
        </View>
      </TouchableNativeFeedback>
    </View>
  )
}