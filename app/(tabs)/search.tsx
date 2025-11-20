import MovieCard from "@/components/MovieCard";
import SearchBar from "@/components/SearchBar";
import { icons } from "@/constants/icons";
import { images } from "@/constants/images";
import { fetchMovies } from "@/services/api";
import { updateSearchCount } from "@/services/appwrite";
import useFetch from "@/services/useFetch";
import { useEffect, useState } from "react";
import { ActivityIndicator, FlatList, Image, Text, View } from "react-native";

const Search = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const {
    data: movies,
    loading: moviesLoading,
    error: moviesError,
    fetchData: refetchMovies,
    reset,
  } = useFetch(() => fetchMovies({ query: searchQuery }), false);
  console.log("Home Page:::", movies?.results);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (searchQuery.trim()) {
        refetchMovies();
        if (movies?.results.length > 0 && movies?.results[0]) {
          updateSearchCount(searchQuery, movies?.results[0]);
        }
      } else {
        reset();
      }
    }, 700); // Debounce time of 600ms

    return () => clearTimeout(timeoutId);
  }, [searchQuery]);

  return (
    <View className="flex-1 bg-primary w-full">
      <Image
        source={images.bg}
        className="flex-1 absolute w-full z-0"
        resizeMode="cover"
      />
      <FlatList
        data={movies?.results}
        renderItem={({ item }) => <MovieCard {...item} />}
        keyExtractor={(item) => item.id}
        numColumns={3}
        columnWrapperStyle={{
          justifyContent: "flex-start",
          gap: 20,
          marginVertical: 16,
          marginBottom: 10,
          paddingLeft: 16,
        }}
        contentContainerStyle={{ paddingBottom: 100 }}
        className="mt-20 pb-32"
        scrollEnabled={true}
        ListHeaderComponent={
          <>
            <View className="flex-row items-center justify-center w-full mb-4">
              <Image source={icons.logo} className="w-12 h-10" />
            </View>
            <View className="m-5">
              <SearchBar
                placeHolder="Search movies..."
                value={searchQuery}
                onChangeText={(text: string) => setSearchQuery(text)}
              />
            </View>
            {moviesLoading && (
              <ActivityIndicator size={"large"} color={"#0000ff"} />
            )}
            {moviesError && (
              <Text className="text-red-500 flex-1 text-center px-5 my-3">
                Error: {moviesError?.message}
              </Text>
            )}
            {!moviesLoading &&
            !moviesError &&
            searchQuery.trim() &&
            movies?.results.length > 0 ? (
              <Text className="text-xl text-white font-bold mx-4">
                Search Results for{" "}
                <Text className="text-accent">{searchQuery}</Text>
              </Text>
            ) : null}
          </>
        }
        ListEmptyComponent={
          !moviesLoading && !moviesError ? (
            <View className="mt-10 px-5">
              <Text className="text-gray-200 text-center font-bold text-xl">
                {searchQuery.trim()
                  ? "No results found. Try a different search."
                  : "Start typing to search for movies."}
              </Text>
            </View>
          ) : null
        }
      />
    </View>
  );
};

export default Search;
