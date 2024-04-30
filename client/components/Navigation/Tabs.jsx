import { useEffect, useState } from "react";

import axios from "axios";

import { Button, StyleSheet, Text, View } from "react-native";

import { Layout, Tab, TabView } from "@ui-kitten/components";

import KilosSection from "../../sections/kilos/KilosSection";
import PreciosSection from "../../sections/precios/PreciosSection";
import ReportesSection from "../../sections/reportes/ReportesSection";
import Tomate from "../../sections/tomate/Tomate";

export default function TabsContainer() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [tomateData, setTomateData] = useState();
  const [isVisibleContent, setIsVisibleContent] = useState(false);

  // useEffect(() => {
  //   if (isVisibleContent) {
  //   }
  // }, [isVisibleContent]);

  useEffect(() => {
    getAllData();
  }, []);

  async function getAllData() {
    const data = (await axios.get("http://192.168.1.8:3000/data")).data;
    const [primera, segunda, tercera, bolilla] = data;

    const tomateData = [
      {
        cajas: primera[0].cajas,
        kilos: primera[0].kilos,
        precio: primera[0].precio,
      },
      {
        cajas: segunda[0].cajas,
        kilos: segunda[0].kilos,
        precio: segunda[0].precio,
      },
      {
        cajas: tercera[0].cajas,
        kilos: tercera[0].kilos,
        precio: tercera[0].precio,
      },
      {
        cajas: bolilla[0].cajas,
        kilos: bolilla[0].kilos,
        precio: bolilla[0].precio,
      },
    ];

    setTomateData(tomateData);
    setIsVisibleContent(true);
  }

  return (
    <>
      <View style={styles.tabContainer}>
        {isVisibleContent ? (
          <TabView
            tabBarStyle={styles.tabBarStyle}
            indicatorStyle={styles.indicatorStyle}
            selectedIndex={selectedIndex}
            onSelect={(index) => setSelectedIndex(index)}
          >
            <Tab title="TOMATE">
              <Tomate tomateData={tomateData} />
            </Tab>
            <Tab title="REPORTES">
              <ReportesSection />
            </Tab>
          </TabView>
        ) : null}
      </View>
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
