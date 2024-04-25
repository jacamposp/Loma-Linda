import { useState, useEffect } from "react";
import axios from "axios";
import { View, Text, Button, StyleSheet, ScrollView } from "react-native";

export default function ReportesSection({ queryID }) {
  const [matas, setMatas] = useState();
  const [kilos, setKilos] = useState(0);
  const [ingresos, setIngresos] = useState();

  const [total, setTotal] = useState();

  // async function getRow() {
  //   const response = await fetch("http://192.168.1.8:3000/reporte/" + queryID, {
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     method: "GET",
  //   });
  //   const data = await response.json();
  //   setKilos(
  //     +data[0].kilos1 + +data[0].kilos2 + +data[0].kilos3 + +data[0].kilos4
  //   );

  //   setIngresos(
  //     +data[0].precio1 + +data[0].precio2 + +data[0].precio3 + +data[0].precio4
  //   );
  // }
  async function getTotal() {
    const total = (await axios.get("http://192.168.1.8:3000/reporte")).data[0]
      .Total;
    setTotal(total);
  }

  useEffect(() => {
    getTotal();
  }, [total]);
  return (
    <ScrollView style={styles.container}>
      <View style={styles.total}>
        <Text style={styles.totalTitle}>Total</Text>
        <Text style={styles.totalNum}>
          {new Intl.NumberFormat("es-CR", {
            style: "currency",
            currency: "CRC",
          }).format(total)}
        </Text>
      </View>
      <View>
        <Text>Cantidad de matas:</Text>
        <Text>Rendimiento</Text>
        <Text>Kilos Totales: {kilos}</Text>
        {/* matas entres kilos */}
        <Text>Matas/Kilos</Text>
      </View>

      <View>
        {/* ingreso por matas */}
        <Text>Ingreso por Mata:</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
  },
  total: {
    alignItems: "center",
  },
  totalTitle: {
    fontSize: 20,
    fontWeight: "bold",
  },
  totalNum: {
    fontSize: 16,
    fontWeight: "500",
  },
});
