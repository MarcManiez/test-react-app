CREATE DATABASE List;

USE List;

DROP TABLE IF EXISTS `List`;

CREATE TABLE `List` (
  `Id` INTEGER NOT NULL AUTO_INCREMENT,
  `Item` CHAR(255) NULL,
  PRIMARY KEY (`Id`)
);

-- execute from root using mysql -u root < database/schema.sql