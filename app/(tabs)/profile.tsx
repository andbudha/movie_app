import { icons } from "@/constants/icons";
import { Image, Text, View } from "react-native";

const Profile = () => {
  return (
    <View className="bg-primary flex-1 justify-center items-center">
      <Image source={icons.person} className="size-10 mb-4" />
      <Text className="text-slate-300">Profile</Text>
    </View>
  );
};

export default Profile;
