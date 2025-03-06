import { Link } from "expo-router";
import { Text, View } from "react-native";
import { useState } from "react";

export default function IndexPage() {
  const [isbn, setIsbn] = useState("1234567890");

  return (
    <View>
      <Text>IndexPage</Text>
      <Link
        href={{
          pathname: "/detail",
          params: { isbn },
        }}
      >
        Link to Detail Page
      </Link>
    </View>
  );
}
