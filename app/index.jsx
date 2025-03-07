import { Link } from "expo-router";
import { Text, View, Button } from "react-native";
import { useState } from "react";
import { CameraView, CameraType, useCameraPermissions } from "expo-camera";

export default function IndexPage() {
  const [scannedCode, setScannedCode] = useState(0);
  const [permission, requestPermission] = useCameraPermissions();

  if (!permission) {
    return <View />;
  }

  if (!permission.granted) {
    return (
      <View>
        <Text>We need your permission to show the camera</Text>
        <Button onPress={requestPermission} title="grant permission" />
      </View>
    );
  }

  function handleScannedResult(code) {
    if (code != scannedCode) {
      console.debug("Scanned code", code);
      setScannedCode(code);
    }
  }

  console.debug("render IndexPage");
  return (
    <View style={{ flex: 1, alignItems: "center" }}>
      <Text>IndexPage</Text>

      <CameraView
        style={{ height: 400, width: "80%", margin: 20 }}
        barcodeScannerSettings={{ barcodeTypes: ["ean13"] }}
        onBarcodeScanned={({ data }) => handleScannedResult(data)}
      />

      {scannedCode ? (
        <Link
          href={{
            pathname: "/detail",
            params: { isbn: scannedCode },
          }}
        >
          Link to Detail Page
        </Link>
      ) : (
        <Text>scanning ...</Text>
      )}
    </View>
  );
}
