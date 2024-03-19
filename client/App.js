import { SafeAreaView } from "react-native";

import * as eva from "@eva-design/eva";
import { ApplicationProvider } from "@ui-kitten/components";

import Tabs from "./components/Navigation/Tabs";

export default function App() {
  return (
    <ApplicationProvider {...eva} theme={eva.light}>
      <SafeAreaView>
        <Tabs />
      </SafeAreaView>
    </ApplicationProvider>
  );
}
