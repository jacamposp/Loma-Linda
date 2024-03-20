import { useState } from "react";

import { StyleSheet, Text, View } from "react-native";

import { Layout, Tab, TabView } from "@ui-kitten/components";

import KilosSection from "../../sections/kilos/KilosSection";
import PreciosSection from "../../sections/precios/PreciosSection";
import ReportesSection from "../../sections/reportes/ReportesSection";

export default function TabsContainer() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [ID, setID] = useState(0);

  function getId(id) {
    setID(id);
  }
  return (
    <>
      <View style={styles.tabContainer}>
        <TabView
          selectedIndex={selectedIndex}
          onSelect={(index) => setSelectedIndex(index)}
        >
          <Tab title="KILOS">
            <KilosSection getIdHandler={getId} />
          </Tab>
          <Tab title="PRECIOS">
            <PreciosSection queryID={ID} />
          </Tab>
          <Tab title="REPORTES">
            <ReportesSection queryID={ID} />
          </Tab>
        </TabView>
      </View>
      <Text>ID: {ID}</Text>
    </>
  );
}

const styles = StyleSheet.create({
  tabContainer: {
    padding: 20,
    marginRight: 10,
    marginLeft: 10,
    marginTop: -20,
    backgroundColor: "#fff",
    borderRadius: 20,
    elevation: 5,
  },
  tab: {
    backgroundColor: "#E0E5F6",
  },
});
