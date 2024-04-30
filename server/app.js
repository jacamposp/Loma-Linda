import express from "express";
import cors from "cors";

import {
  getID,
  saveKilosAndCajas,
  savePrecios,
  getReporte,
  getTotal,
  getKilos,
  getAllData,
} from "./database.js";

const app = express();
app.use(express.json());
app.use(cors());

let queryID = 0;

app.get("/", (req, res) => {
  res.send("Hellos World!");
});

app.get("/data", async (req, res) => {
  const data = await getAllData();
  res.json(data);
});

app.get("/tomate", async (req, res) => {
  res.json({ ID: queryID });
});

app.post("/tomate", async (req, res) => {
  const { cajas1, kilos1, cajas2, kilos2, cajas3, kilos3, cajas4, kilos4 } =
    req.body;
  const data = await saveKilosAndCajas(
    cajas1,
    kilos1,
    cajas2,
    kilos2,
    cajas3,
    kilos3,
    cajas4,
    kilos4
  );
  queryID = data;
  res.sendStatus(201);
});

app.put("/tomatePrecio", async (req, res) => {
  const { precio1, precio2, precio3, precio4, id } = req.body;
  const data = await savePrecios(precio1, precio2, precio3, precio4, id);
  res.send(data);
});

app.get("/reporte/:id", async (req, res) => {
  const id = req.params.id;
  const data = await getReporte(id);
  res.send(data);
  //console.log(data);
});

app.get("/reporte", async (req, res) => {
  const total = await getTotal();
  res.json(total);
});

app.get("/kilos", async (req, res) => {
  const kilos = await getKilos();
  res.json(kilos);
});

app.listen(3000, () => {
  console.log(`App listening on port 3000`);
});
