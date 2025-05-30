import {
    View,
    Text,
    TouchableWithoutFeedback,
    Dimensions,
    FlatList,
    Image,
  } from "react-native";
  import React from "react";
  import { useNavigation } from "@react-navigation/native";
  import { image500 } from "../../utils/moviesapi";
  
  const { width, height } = Dimensions.get("window");
  
  export default function UpcomingMovie({ title, data }) {
    const navigation = useNavigation();
  
    const renderItem = ({ item, index }) => {
      return (
        <TouchableWithoutFeedback
          key={index}
          onPress={() => navigation.push("Movie", item)}
        >
          <View className="space-y-1 mr-4 ">
            <Image
              source={{
                uri: image500(item.poster_path),
              }}
              className="rounded-3xl"
              style={{
                width: width * 0.3,
                height: height * 0.2,
              }}
            />
  
            <Text className=" text-neutral-300 ml-1 text-lg font-bold">
              {item.title.length > 12
                ? item.title.slice(0, 12) + "..."
                : item.title}
            </Text>
          </View>
        </TouchableWithoutFeedback>
      );
    };
  
    return (
      <View className="space-y-4 mb-4">
        <View className="mx-4 flex-row justify-between items-center">
          <Text className="text-white text-lg font-bold">{title}</Text>
        </View>
  
        <FlatList
          horizontal
          data={data}
          renderItem={renderItem}
          keyExtractor={(item, index) => index.toString()}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{
            paddingHorizontal: 15,
          }}
        />
      </View>
    );
  }