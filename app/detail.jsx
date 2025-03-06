import { Text, View } from "react-native";
import { useLocalSearchParams } from "expo-router";

export default function DetailPage() {
  const { isbn } = useLocalSearchParams();

  return (
    <View>
      <Text>Detail</Text>
      <Text>{isbn}</Text>
    </View>
  );
}
