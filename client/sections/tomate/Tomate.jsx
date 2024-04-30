import { useEffect, useState } from "react";
import axios from "axios";
import {
  View,
  StyleSheet,
  Text,
  ScrollView,
  TouchableOpacity,
} from "react-native";

import DATA from "../../data/data.json";

import Graph from "../../components/Graph/Graph";

export default function Tomate({ tomateData }) {
  return (
    <>
      <ScrollView style={styles.container}>
        <View style={styles.graphContainer}>
          <Graph />
        </View>
        {DATA.Tomates.map((tomate, index) => {
          return (
            <TouchableOpacity key={index} style={styles.box}>
              <View style={styles.boxTitle}>
                <Text
                  style={{
                    backgroundColor: tomate.color,
                    width: 10,
                  }}
                ></Text>
                <Text>{tomate.tipo}</Text>
              </View>
              <View style={styles.boxData}>
                <Text style={styles.boxCajas}>{tomateData[index].cajas}</Text>
                <Text style={styles.boxKilos}>
                  {tomateData[index].kilos} Kg
                </Text>
                <Text style={styles.boxPrecio}>
                  {new Intl.NumberFormat("es-CR", {
                    style: "currency",
                    currency: "CRC",
                    maximumFractionDigits: 0,
                  }).format(tomateData[index].precio)}
                </Text>
              </View>
            </TouchableOpacity>
          );
        })}
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
  },
  graphContainer: {
    backgroundColor: "#fff",
    width: "100%",
    borderRadius: 10,
    padding: 15,
    marginBottom: 10,
    alignSelf: "center",
    alignItems: "center",
  },
  box: {
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "#fff",
    padding: 15,
    borderRadius: 10,
    marginBottom: 15,
  },
  boxTitle: {
    flexDirection: "row",
    gap: 5,
  },
  boxData: {
    flexDirection: "row",
  },
  boxCajas: {
    marginLeft: 20,
  },
  boxKilos: {
    marginLeft: 20,
  },
  boxPrecio: {
    fontWeight: "bold",
    marginLeft: 20,
  },
});
