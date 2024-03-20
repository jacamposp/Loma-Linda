import { useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  Button,
  Keyboard,
  ScrollView,
} from "react-native";

import { Input } from "@ui-kitten/components";

export default function KilosContainer({ getIdHandler }) {
  const [cajas1, setCajas1] = useState("");
  const [cajas2, setCajas2] = useState("");
  const [cajas3, setCajas3] = useState("");
  const [cajas4, setCajas4] = useState("");
  const [kilos1, setKilos1] = useState("");
  const [kilos2, setKilos2] = useState("");
  const [kilos3, setKilos3] = useState("");
  const [kilos4, setKilos4] = useState("");
  const [totalCajas, setTotalCajas] = useState(0);
  const [totalKilos, setTotalKilos] = useState(0);
  const [status, setStatus] = useState("");
  const [disable, setDisabled] = useState(false);

  async function saveData() {
    Keyboard.dismiss();
    const data = await fetch("http://192.168.1.8:3000/tomate", {
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify({
        cajas1: cajas1,
        kilos1: kilos1,
        cajas2: cajas2,
        kilos2: kilos2,
        cajas3: cajas3,
        kilos3: kilos3,
        cajas4: cajas4,
        kilos4: kilos4,
      }),
    });

    const getQueryID = await fetch("http://192.168.1.8:3000/tomate");
    const queryID = await getQueryID.json();

    setDisabled(true);
    setStatus("enviado");
    getIdHandler(queryID["ID"]);
    suma();
  }

  function suma() {
    setTotalCajas(+cajas1 + +cajas2 + +cajas3 + +cajas4);
    setTotalKilos(+kilos1 + +kilos2 + +kilos3 + +kilos4);
  }

  return (
    <>
      <ScrollView
        style={styles.container}
        keyboardShouldPersistTaps={"handled"}
      >
        <Text style={styles.title}>Kilos</Text>
        <Text>Tomate de Primera</Text>
        <View style={styles.inputGroup}>
          <Input
            style={styles.input}
            placeholder="Cantidad de cajas"
            value={cajas1}
            onChangeText={(nextValue) => setCajas1(nextValue)}
            keyboardType="numeric"
            disabled={disable}
          />
          <Input
            style={styles.input}
            placeholder="Cantidad de Kilos"
            value={kilos1}
            onChangeText={(nextValue) => setKilos1(nextValue)}
            keyboardType="numeric"
            disabled={disable}
          />
        </View>
        <Text>Tomate de Segunda</Text>
        <View style={styles.inputGroup}>
          <Input
            style={styles.input}
            placeholder="Cantidad de cajas"
            value={cajas2}
            onChangeText={(nextValue) => setCajas2(nextValue)}
            keyboardType="numeric"
            disabled={disable}
          />
          <Input
            style={styles.input}
            placeholder="Cantidad de Kilos"
            value={kilos2}
            onChangeText={(nextValue) => setKilos2(nextValue)}
            keyboardType="numeric"
            disabled={disable}
          />
        </View>
        <Text>Tomate de Tercera</Text>
        <View style={styles.inputGroup}>
          <Input
            style={styles.input}
            placeholder="Cantidad de cajas"
            value={cajas3}
            onChangeText={(nextValue) => setCajas3(nextValue)}
            keyboardType="numeric"
            disabled={disable}
          />
          <Input
            style={styles.input}
            placeholder="Cantidad de Kilos"
            value={kilos3}
            onChangeText={(nextValue) => setKilos3(nextValue)}
            keyboardType="numeric"
            disabled={disable}
          />
        </View>
        <Text>Tomate Bolilla</Text>
        <View style={styles.inputGroup}>
          <Input
            style={styles.input}
            placeholder="Cantidad de cajas"
            value={cajas4}
            onChangeText={(nextValue) => setCajas4(nextValue)}
            keyboardType="numeric"
            disabled={disable}
          />
          <Input
            style={styles.input}
            placeholder="Cantidad de Kilos"
            value={kilos4}
            onChangeText={(nextValue) => setKilos4(nextValue)}
            keyboardType="numeric"
            disabled={disable}
          />
        </View>
        <View>
          <Text style={{ fontSize: 18, fontWeight: "500" }}>Total</Text>
          <View style={styles.totalContainer}>
            <Text>Total de cajas: {totalCajas}</Text>
            <Text>Total de kilos: {totalKilos}</Text>
          </View>
        </View>
        <View style={styles.button}>
          <Button
            title={status === "enviado" ? "Guardado" : "Guardar"}
            color="white"
            onPress={saveData}
            disabled={disable}
          />
        </View>
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
  },
  title: {
    textAlign: "center",
    fontWeight: "600",
    fontSize: 20,
  },
  inputGroup: {
    flexDirection: "row",
    marginTop: 10,
    marginBottom: 20,
    justifyContent: "space-evenly",
    gap: 10,
  },
  input: {
    flex: 1,
    color: "#304c9f",
  },
  totalContainer: {
    marginTop: 20,
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  button: {
    marginTop: 20,
    backgroundColor: "#CC2936",
    borderRadius: 200,
  },
});
