import { icons } from "@/constants/icons";
import { Link } from "expo-router";
import * as React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";

const MovieCard = ({
  id,
  poster_path,
  title,
  release_date,
  vote_average,
}: Movie) => {
  console.log(poster_path);

  return (
    <Link href={`/movies/${id}`} asChild>
      <TouchableOpacity className="w-32 mr-2 mb-3">
        {poster_path ? (
          <Image
            source={{
              uri: `https://image.tmdb.org/t/p/w500${poster_path}`,
            }}
            className="w-full h-52 rounded-lg"
            resizeMode="cover"
          />
        ) : (
          <View className="w-full h-52 rounded-lg bg-white items-center justify-center">
            <Image
              source={icons.play}
              className="w-12 h-12 opacity-50"
              resizeMode="contain"
            />
          </View>
        )}
        <Text
          className="text-white mt-2 text-sm font-semibold"
          numberOfLines={1}
        >
          {title}
        </Text>
        <View className="flex-row items-center justify-start gap-1">
          <Image source={icons.star} className="size-5" />
          <Text className="text-white font-bold text-xs">
            {Math.round(vote_average / 2)}
          </Text>
        </View>
        <View className="flex-row items-center justify-between">
          <Text className="text-xs text-light-300 font-medium mt-1">
            {release_date.split("-")[0]}
          </Text>
          <Text className="text-xs font-medium uppercase text-light-300">
            Movie
          </Text>
        </View>
      </TouchableOpacity>
    </Link>
  );
};

export default MovieCard;
