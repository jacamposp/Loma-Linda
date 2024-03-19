import { useState } from "react";
import { StyleSheet } from "react-native";

import { Input as InputComponent } from "@ui-kitten/components";

export default function Input({ text }) {
  const [value, setValue] = useState("");

  return (
    <InputComponent
      style={styles.input}
      placeholder={text}
      value={value}
      onChangeText={(nextValue) => setValue(nextValue)}
    />
  );
}

const styles = StyleSheet.create({
  input: {
    flex: 1,
    color: "#304c9f",
  },
});
