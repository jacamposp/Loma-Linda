import { useState } from "react";

import { StyleSheet, Text } from "react-native";

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
      <Text>ID: {ID}</Text>
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
      {/* <View style={styles.container}>
        <TabItem text={"Kilos"} />
        <TabItem text={"Precio"} />
        <TabItem text={"Reporte"} />
      </View> */}
    </>
  );
}

const styles = StyleSheet.create({
  tabContainer: {
    height: 64,
    alignItems: "center",
    justifyContent: "center",
  },
});
