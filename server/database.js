import mysql from "mysql2";
import dotenv from "dotenv";
//initialize  dotenv
dotenv.config();

const pool = mysql
  .createPool({
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASS,
    database: process.env.MYSQL_DATABASE,
  })
  .promise();

//aqui van todas la query para obtener cosas de la base de datos
export async function getID(id) {
  const [ID] = await pool.query(
    `SELECT id FROM loma_linda.tomate_reportes WHERE id = ?`,
    [id]
  );
  return ID[0];
}

export async function saveKilosAndCajas(
  cajas1,
  kilos1,
  cajas2,
  kilos2,
  cajas3,
  kilos3,
  cajas4,
  kilos4
) {
  const [result] = await pool.query(
    `INSERT INTO loma_linda.tomate_reportes (cajas1, kilos1, cajas2, kilos2, cajas3, kilos3, cajas4, kilos4)
     VALUES (?, ?, ?, ?, ?, ?, ?, ?)`,
    [cajas1, kilos1, cajas2, kilos2, cajas3, kilos3, cajas4, kilos4]
  );
  const queryID = result.insertId;
  return queryID;
}

export async function savePrecios(precio1, precio2, precio3, precio4, id) {
  const [result] = await pool.query(
    `UPDATE loma_linda.tomate_reportes SET precio1 = ?, precio2 = ?, precio3 = ?, precio4 = ? WHERE id = ?`,
    [precio1, precio2, precio3, precio4, id]
  );
  return result;
}

export async function getReporte(id) {
  console.log(id);
  const [result] = await pool.query(
    `SELECT * FROM loma_linda.tomate_reportes WHERE id = ?`,
    [id]
  );
  return result;
}

export async function getTotal() {
  const [total] = await pool.query(
    `SELECT SUM (precio1) + SUM(precio2) + SUM (precio3) + SUM(precio4) as Total FROM loma_linda.tomate_reportes`
  );
  return total;
}

export async function getKilos() {
  const [kilos] = await pool.query(
    `SELECT SUM(kilos1) as kilosPrimera, SUM(kilos2) as kilosSegunda, SUM(kilos3) as kilosTercera, SUM(kilos4) as kilosBolilla FROM loma_linda.tomate_reportes`
  );
  return kilos;
}

export async function getAllData() {
  const [primera] = await pool.query(
    `SELECT SUM(kilos1) as kilos, SUM(cajas1) as cajas, SUM(precio1) as precio FROM loma_linda.tomate_reportes`
  );
  const [segunda] = await pool.query(
    `SELECT SUM(kilos2) as kilos, SUM(cajas2) as cajas, SUM(precio3) as precio FROM loma_linda.tomate_reportes`
  );
  const [tercera] = await pool.query(
    `SELECT SUM(kilos3) as kilos, SUM(cajas3) as cajas, SUM(precio3) as precio FROM loma_linda.tomate_reportes`
  );
  const [bolilla] = await pool.query(
    `SELECT SUM(kilos4) as kilos, SUM(cajas4) as cajas, SUM(precio4) as precio FROM loma_linda.tomate_reportes`
  );

  return [primera, segunda, tercera, bolilla];
}
getAllData();
