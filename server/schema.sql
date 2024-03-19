CREATE DATABASE loma_linda;

USE loma_linda;

CREATE TABLE tomate_reportes (
`id` int NOT NULL auto_increment PRIMARY KEY,
`cajas1` int,
`kilos1` int,
`precio1` int,
`cajas2` int,
`kilos2` int,
`precio2` int,
`cajas3` int,
`kilos3` int,
`precio3` int,
`cajas4` int,
`kilos4` int,
`precio4` int
) engine=InnoDB auto_increment=1 default charset=utf8mb4 collate=utf8mb4_0900_ai_ci;


-- Select all 
SELECT * FROM loma_linda.tomate_reportes;