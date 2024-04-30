import { useEffect, useState } from "react";
import { Alert, View, Button } from "react-native";
import { PieChart } from "react-native-gifted-charts";
import { calculatePercentage } from "../../utils/chartData";
import axios from "axios";

export default function Graph({ data }) {
  const [chartData, setChartData] = useState([
    { value: 100, color: "red", text: "100%" },
  ]);

  useEffect(() => {
    getChartData();
  }, []);

  async function getChartData() {
    const kilos = (await axios.get("http://192.168.1.8:3000/kilos")).data[0];
    const percentage = calculatePercentage(kilos);
    setChartData([
      {
        value: +percentage[0].kilosPrimera,
        color: "#FB3640",
        text: +percentage[0].kilosPrimera + "%",
      },
      {
        value: +percentage[0].kilosSegunda,
        color: "#177E89",
        text: +percentage[0].kilosSegunda + "%",
      },
      {
        value: +percentage[0].kilosTercera,
        color: "#084C61",
        text: +percentage[0].kilosTercera + "%",
      },
      {
        value: +percentage[0].kilosBolilla,
        color: "#FFC857",
        text: +percentage[0].kilosBolilla + "%",
      },
    ]);
  }

  return (
    <View>
      <PieChart
        showText
        donut
        textColor="black"
        radius={100}
        innerRadius={50}
        textSize={12}
        data={chartData}
      />
    </View>
  );
}
