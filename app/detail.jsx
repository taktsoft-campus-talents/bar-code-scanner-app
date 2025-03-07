import { Text, View } from "react-native";
import { useLocalSearchParams } from "expo-router";
import { useEffect, useState } from "react";

export default function DetailPage() {
  const { isbn } = useLocalSearchParams();
  const [data, setData] = useState(null);

  // https://openlibrary.org/api/books?bibkeys=ISBN:1931498717&jscmd=details&format=json

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(
        `https://openlibrary.org/api/books?bibkeys=ISBN:${isbn}&jscmd=details&format=json`
      );
      const data = await response.json();
      setData(data);
    }
    fetchData();
  }, [isbn]);

  if (JSON.stringify(data) === "{}") {
    return <Text>Das Buch wurde nicht gefunden!</Text>;
  }

  // const data = {
  //   "ISBN:9783424631074": {
  //     bib_key: "ISBN:9783424631074",
  //     details: {
  //       classifications: [Object],
  //       created: [Object],
  //       identifiers: [Object],
  //       isbn_10: [Array],
  //       key: "/books/OL31684942M",
  //       languages: [Array],
  //       last_modified: [Object],
  //       latest_revision: 3,
  //       number_of_pages: 276,
  //       publish_date: "2015",
  //       publishers: [Array],
  //       revision: 3,
  //       source_records: [Array],
  //       subtitle: "Der Schlüssel zur Lösung (fast) aller Probleme",
  //       title: "Das Kind in dir muss Heimat finden",
  //       type: [Object],
  //       works: [Array],
  //     },
  //     info_url:
  //       "https://openlibrary.org/books/OL31684942M/Das_Kind_in_dir_muss_Heimat_finden",
  //     preview: "noview",
  //     preview_url:
  //       "https://openlibrary.org/books/OL31684942M/Das_Kind_in_dir_muss_Heimat_finden",
  //   },
  // };

  return (
    <View>
      <Text>Detail</Text>
      <Text>{isbn}</Text>
    </View>
  );
}
