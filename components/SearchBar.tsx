import { icons } from "@/constants/icons";
import * as React from "react";
import { Image, TextInput, View } from "react-native";

interface SearchBarProps {
  onPress?: () => void;
  placeHolder: string;
  value?: string;
  onChangeText?: (text: string) => void;
}
const SearchBar = ({
  onPress,
  placeHolder,
  value,
  onChangeText,
}: SearchBarProps) => {
  return (
    <View className="flex-row items-center bg-[#302C48] rounded-full px-5 py-4 ">
      <Image
        source={icons.search}
        className="size-5"
        resizeMode="contain"
        tintColor={"#ab8bff"}
      />
      <TextInput
        onPress={onPress}
        placeholder={placeHolder}
        value={value}
        onChangeText={onChangeText}
        placeholderTextColor={"#a8b5db"}
        className="flex-1 ml-2 text-white text-base"
      />
    </View>
  );
};

export default SearchBar;
