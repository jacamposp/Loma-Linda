import { useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  Button,
  Keyboard,
  ScrollView,
  TouchableOpacity,
} from "react-native";

import DATA from "../../data/data.json";

import { Input } from "@ui-kitten/components";

export default function Tomate() {
  const tomate = DATA.Tomates;
  return (
    <>
      <ScrollView style={styles.container}>
        {DATA.Tomates.map((tomate, index) => {
          return (
            <TouchableOpacity key={index} style={styles.box}>
              <Text style={styles.boxTitle}>{tomate.tipo}</Text>
              <View style={styles.boxData}>
                <Text style={styles.boxCajas}>40</Text>
                <Text style={styles.boxKilos}>100</Text>
                <Text style={styles.boxPrecio}>
                  {new Intl.NumberFormat("es-CR", {
                    style: "currency",
                    currency: "CRC",
                    maximumFractionDigits: 0,
                  }).format(15000)}
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
  box: {
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "#fff",
    padding: 15,
    borderRadius: 10,
    marginBottom: 15,
  },
  boxTitle: {
    fontWeight: "bold",
  },
  boxData: {
    flexDirection: "row",
  },
  boxCajas: {
    marginLeft: 15,
  },
  boxKilos: {
    marginLeft: 15,
  },
  boxPrecio: {
    fontWeight: "bold",
    marginLeft: 15,
  },
});
