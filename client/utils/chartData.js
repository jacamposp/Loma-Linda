import axios from "axios";

export function calculatePercentage(kilos) {
  //   const kilos = (await axios.get("http://192.168.1.8:3000/kilos")).data[0];

  const kilosTotales =
    +kilos.kilosPrimera +
    +kilos.kilosSegunda +
    +kilos.kilosTercera +
    +kilos.kilosBolilla;

  const kilosPrimera = (+(kilos.kilosPrimera / kilosTotales) * 100).toFixed(0);
  const kilosSegunda = (+(kilos.kilosSegunda / kilosTotales) * 100).toFixed(0);
  const kilosTercera = (+(kilos.kilosTercera / kilosTotales) * 100).toFixed(0);
  const kilosBolilla = (+(kilos.kilosBolilla / kilosTotales) * 100).toFixed(0);

  const data = [
    {
      kilosTotales: kilosTotales,
      kilosPrimera: kilosPrimera,
      kilosSegunda: kilosSegunda,
      kilosTercera: kilosTercera,
      kilosBolilla: kilosBolilla,
    },
  ];

  return data;
}
