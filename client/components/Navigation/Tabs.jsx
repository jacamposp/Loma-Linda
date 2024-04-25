import { useState } from "react";

import { StyleSheet, Text, View } from "react-native";

import { Layout, Tab, TabView } from "@ui-kitten/components";

import KilosSection from "../../sections/kilos/KilosSection";
import PreciosSection from "../../sections/precios/PreciosSection";
import ReportesSection from "../../sections/reportes/ReportesSection";
import Tomate from "../../sections/tomate/Tomate";

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
          tabBarStyle={styles.tabBarStyle}
          indicatorStyle={styles.indicatorStyle}
          selectedIndex={selectedIndex}
          onSelect={(index) => setSelectedIndex(index)}
        >
          {/* <Tab title="KILOS">
            <KilosSection getIdHandler={getId} />
          </Tab>
          <Tab title="PRECIOS">
            <PreciosSection queryID={ID} />
          </Tab> */}
          <Tab title="TOMATE">
            <Tomate />
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
    padding: 10,
    marginTop: -25,
    marginRight: 5,
    marginLeft: 5,
  },
  tabBarStyle: {
    borderRadius: 10,
  },
  indicatorStyle: {
    width: 150,
    top: -3,
  },
});
