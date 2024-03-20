import { useState } from "react";
import { View, Text, Button, StyleSheet, ScrollView } from "react-native";

export default function ReportesSection({ queryID }) {
  const [matas, setMatas] = useState();
  const [kilos, setKilos] = useState(0);
  const [ingresos, setIngresos] = useState();

  async function getRow() {
    const response = await fetch("http://192.168.1.8:3000/reporte/" + queryID, {
      headers: {
        "Content-Type": "application/json",
      },
      method: "GET",
    });

    const data = await response.json();
    setKilos(
      +data[0].kilos1 + +data[0].kilos2 + +data[0].kilos3 + +data[0].kilos4
    );

    setIngresos(
      +data[0].precio1 + +data[0].precio2 + +data[0].precio3 + +data[0].precio4
    );
  }

  return (
    <ScrollView style={styles.container}>
      <View style={styles.button}>
        <Button color="white" title={"Ver registro"} onPress={getRow} />
      </View>

      <View>
        <Text>Cantidad de matas:</Text>
        <Text>Rendimiento</Text>
        <Text>Kilos Totales: {kilos}</Text>
        {/* matas entres kilos */}
        <Text>Matas/Kilos</Text>
      </View>

      <View>
        <Text>Ingresos</Text>
        <Text>Ingreso Total: {ingresos}</Text>
        {/* ingreso por matas */}
        <Text>Ingreso por Mata:</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
  },
  button: {
    marginTop: 20,
    backgroundColor: "#CC2936",
    borderRadius: 200,
  },
});
