import { icons } from "@/constants/icons";
import { Image, Text, View } from "react-native";

const Saved = () => {
  return (
    <View className="bg-primary flex-1 justify-center items-center">
      <Image source={icons.save} className="size-10 mb-4" />
      <Text className="text-slate-300">Saved Movies</Text>
    </View>
  );
};

export default Saved;
