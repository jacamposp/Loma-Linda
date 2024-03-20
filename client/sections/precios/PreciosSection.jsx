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

export default function PreciosSection({ queryID }) {
  const [precio1, setPrecio1] = useState("");
  const [precio2, setPrecio2] = useState("");
  const [precio3, setPrecio3] = useState("");
  const [precio4, setPrecio4] = useState("");
  const [status, setStatus] = useState("");
  const [disable, setDisabled] = useState(false);

  async function savePrecios() {
    Keyboard.dismiss();
    const data = await fetch("http://192.168.1.8:3000/tomatePrecio", {
      headers: {
        "Content-Type": "application/json",
      },
      method: "PUT",
      body: JSON.stringify({
        precio1: precio1,
        precio2: precio2,
        precio3: precio3,
        precio4: precio4,
        id: queryID,
      }),
    });
    setDisabled(true);
    setStatus("enviado");
  }

  return (
    <>
      <ScrollView
        style={styles.container}
        keyboardShouldPersistTaps={"handled"}
      >
        <Text style={styles.title}>Precios</Text>
        <Text>Tomate de Primera</Text>
        <View style={styles.inputGroup}>
          <Input
            style={styles.input}
            placeholder="Precio tomate de primera"
            value={precio1}
            onChangeText={(nextValue) => setPrecio1(nextValue)}
            keyboardType="numeric"
            disabled={disable}
          />
        </View>
        <Text>Tomate de Segunda</Text>
        <View style={styles.inputGroup}>
          <Input
            style={styles.input}
            placeholder="Precio tomate de segunda"
            value={precio2}
            onChangeText={(nextValue) => setPrecio2(nextValue)}
            keyboardType="numeric"
            disabled={disable}
          />
        </View>
        <Text>Tomate de Tercera</Text>
        <View style={styles.inputGroup}>
          <Input
            style={styles.input}
            placeholder="Precio tomate de tercera"
            value={precio3}
            onChangeText={(nextValue) => setPrecio3(nextValue)}
            keyboardType="numeric"
            disabled={disable}
          />
        </View>
        <Text>Tomate Bolilla</Text>
        <View style={styles.inputGroup}>
          <Input
            style={styles.input}
            placeholder="Precio tomate bolilla"
            value={precio4}
            onChangeText={(nextValue) => setPrecio4(nextValue)}
            keyboardType="numeric"
            disabled={disable}
          />
        </View>
        <View style={styles.button}>
          <Button
            title={status === "enviado" ? "Guardado" : "Guardar"}
            color="white"
            onPress={savePrecios}
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
  button: {
    marginTop: 20,
    backgroundColor: "#CC2936",
    borderRadius: 200,
  },
});
