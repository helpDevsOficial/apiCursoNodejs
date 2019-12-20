CREATE SCHEMA `cursonode` ;
USE cursonode;

CREATE TABLE `cursonode`.`user` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `nome` VARCHAR(70) NOT NULL,
  `email` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id`)); 