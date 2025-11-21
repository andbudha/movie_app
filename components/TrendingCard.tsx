import { icons } from "@/constants/icons";
import { images } from "@/constants/images";
import { fetchMovieById } from "@/services/api";
import useFetch from "@/services/useFetch";
import MaskedView from "@react-native-masked-view/masked-view";
import { Link } from "expo-router";
import { Image, Text, TouchableOpacity, View } from "react-native";

const TrendingCard = ({
  trendingMovie,
  index,
}: {
  trendingMovie: TrendingMovie;
  index: number;
}) => {
  const { data: movie } = useFetch(() =>
    fetchMovieById(trendingMovie.movie_id.toString())
  );
  return (
    <Link href={`/movies/${trendingMovie.movie_id}`} asChild>
      <TouchableOpacity className="w-32  relative ml-2">
        <Image
          source={{ uri: trendingMovie.poster_url }}
          className="w-32 h-48 rounded-lg"
          resizeMode="cover"
        />
        <View className="absolute bottom-14 -left-5 px-2 py-1 rounded-full">
          <>
            <MaskedView
              maskElement={
                <>
                  <Text className="text-white font-bold text-6xl">
                    {index + 1}
                  </Text>
                </>
              }
            >
              <Image
                source={images.rankingGradient}
                className="size-14"
                resizeMode="cover"
              />
            </MaskedView>
          </>
        </View>
        <View className="flex-row items-center justify-center absolute top-0 -right-1 bg-[#9CA4AB] rounded-full px-2">
          <Image source={icons.star} className="size-5" />
          <Text className="text-slate-900">
            {" "}
            {movie && Math.round(movie.vote_average / 2)}
          </Text>
        </View>
        <Text
          className="text-sm font-bold mt-2 text-light-200"
          numberOfLines={2}
        >
          {trendingMovie.title}
        </Text>
      </TouchableOpacity>
    </Link>
  );
};

export default TrendingCard;
