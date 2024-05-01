import { SafeAreaView, View, StyleSheet } from "react-native";

import * as eva from "@eva-design/eva";
import { ApplicationProvider } from "@ui-kitten/components";
import { default as theme } from "./custom-theme.json";

import Tabs from "./components/Navigation/Tabs";
import DBSelector from "./components/DBSelector/DBSelector";

export default function App() {
  return (
    <>
      <View style={{ height: "100%", backgroundColor: "#FCEEEF" }}>
        <ApplicationProvider {...eva} theme={{ ...eva.light, ...theme }}>
          <SafeAreaView style={{ flex: 0, backgroundColor: "#CC2936" }} />
          <SafeAreaView>
            <DBSelector />
            <Tabs />
          </SafeAreaView>
        </ApplicationProvider>
      </View>
    </>
  );
}
