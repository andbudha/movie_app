import { icons } from "@/constants/icons";
import { fetchMovieById } from "@/services/api";
import useFetch from "@/services/useFetch";
import { router } from "expo-router";
import { useLocalSearchParams } from "expo-router/build/hooks";
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";

const MovieDetails = () => {
  const { id } = useLocalSearchParams();
  const { data: movie } = useFetch(() => fetchMovieById(id as string));

  return (
    <View className="bg-primary flex-1">
      <ScrollView contentContainerStyle={{ paddingBottom: 120 }}>
        <View>
          <Image
            source={{
              uri: `https://image.tmdb.org/t/p/w500${movie?.poster_path}`,
            }}
            className="w-full h-[630px]"
            resizeMode="stretch"
          />
        </View>
        <View className="flex-col items-start justify-center mt-5 px-5">
          <Text className="text-white text-2xl font-bold mb-2">
            {movie?.title}
          </Text>
          <Text className="text-light-200 text-sm mb-2">
            Release Date: {movie?.release_date.split("-")[0]}
          </Text>
          <Text className="text-light-200 text-sm mb-2">
            Runtime: {movie?.runtime ? movie?.runtime : "N/A"} minutes
          </Text>
          <Text className="text-light-200 text-sm mb-2">
            Genres:{" "}
            {movie?.genres && movie?.genres.length > 0
              ? movie?.genres.map((genre: any) => genre.name).join("/")
              : "N/A"}
          </Text>
          <Text className="text-light-200 text-sm mb-2">
            Budget: $ {movie?.budget ? movie?.budget.toLocaleString() : "N/A"}
          </Text>
          <Text className="text-light-200 text-sm mb-2">
            Revenue: ${" "}
            {movie?.revenue ? movie?.revenue.toLocaleString() : "N/A"}
          </Text>
          <Text className="text-light-200 text-sm mb-2">
            Production Countries:{" "}
            {movie?.production_countries
              ? movie?.production_countries
                  .map((country: any) => country.name)
                  .join(", ")
              : "N/A"}
          </Text>
          <View className="flex-1 flex-row items-center justify-start gap-2 mb-4">
            <Text className="text-light-200 text-sm">Rating:</Text>
            <Image source={icons.star} className="size-5" />
            <Text className="text-light-200 text-sm">
              {movie &&
                Math.round(
                  movie.vote_average ? movie.vote_average / 2 : 0
                )}{" "}
              / 5
            </Text>
            <Text className="text-light-200 text-sm">
              ({movie?.vote_count ? movie?.vote_count : "N/A"}/votes)
            </Text>
          </View>
          <Text className="text-light-200 text-sm mb-2">Overview:</Text>
          <Text className="text-white text-base leading-6">
            {movie?.overview}
          </Text>
        </View>
      </ScrollView>
      <TouchableOpacity
        className="flex-row  absolute bottom-14 left-0 right-0 mx-5 bg-accent py-3 rounded-lg items-center justify-center"
        onPress={() => router.back()}
      >
        <Image
          source={icons.arrow}
          className="size-5 rotate-180"
          tintColor={"#fff"}
        />
        <Text className="text-[#fff] font-semibold ml-1">Go Back</Text>
      </TouchableOpacity>
    </View>
  );
};

export default MovieDetails;
