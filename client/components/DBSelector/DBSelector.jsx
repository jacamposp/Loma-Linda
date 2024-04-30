import { useState } from "react";
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  ScrollView,
  Button,
} from "react-native";
import { Card, Modal, Radio, RadioGroup } from "@ui-kitten/components";
import { AntDesign } from "@expo/vector-icons";

const DATA = [
  {
    id: "1",
    name: "Tomate Recope",
  },
  {
    id: "2",
    name: "Tomate Rio",
  },
  {
    id: "3",
    name: "Tomate Abejas",
  },
];

export default function DBSelector() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [selectedDB, setSelectedDB] = useState("");

  function selectedHanlder(index) {
    setSelectedIndex(index);
    setSelectedDB(DATA[index].name);
  }

  return (
    <>
      <View style={styles.container}>
        <TouchableOpacity onPress={() => setIsOpen(true)}>
          <Text style={{ textAlign: "center", color: "white" }}>
            Cosecha 1 <AntDesign name="down" size={15} color="white" />
          </Text>
        </TouchableOpacity>
      </View>
      <View>
        <Modal
          style={styles.containerModal}
          visible={isOpen}
          backdropStyle={styles.backdrop}
          onBackdropPress={() => setIsOpen(false)}
        >
          <Card disabled={true}>
            <Text style={styles.modalTitle}>
              Seleccione o agregue una cosecha nueva
            </Text>
            <Text category="h6">{`Selected Option: ${selectedDB}`}</Text>
            <ScrollView style={styles.modalGroup}>
              <RadioGroup
                selectedIndex={selectedIndex}
                onChange={(index) => selectedHanlder(index)}
              >
                {DATA.map((data) => {
                  return <Radio key={data.id}>{data.name}</Radio>;
                })}
              </RadioGroup>
            </ScrollView>
            <View style={styles.modalButtons}>
              <View style={styles.selectButton}>
                <Button
                  title={"Seleccionar"}
                  color="white"
                  onPress={() => {
                    alert("En construccion");
                  }}
                />
              </View>
            </View>
          </Card>
        </Modal>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#CC2936",
    height: 80,
    paddingTop: 10,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  containerModal: {
    minHeight: 192,
  },
  backdrop: {
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalTitle: {
    fontSize: 16,
    fontWeight: "600",
  },
  modalGroup: {
    marginTop: 10,
    marginBottom: 20,
  },
  modalButtons: {
    alignItems: "flex-end",
  },
  selectButton: {
    marginTop: 20,
    fontSize: 10,
    backgroundColor: "#CC2936",
    borderRadius: 200,
  },
});
