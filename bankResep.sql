/*
SQLyog Ultimate v12.5.1 (64 bit)
MySQL - 10.3.38-MariaDB-0ubuntu0.20.04.1 : Database - bankresep
*********************************************************************
*/

/*!40101 SET NAMES utf8 */;

/*!40101 SET SQL_MODE=''*/;

/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;
/*Table structure for table `ingredients` */

DROP TABLE IF EXISTS `ingredients`;

CREATE TABLE `ingredients` (
  `IngredientID` varchar(255) NOT NULL,
  `Name` varchar(255) NOT NULL,
  `Description` text DEFAULT NULL,
  `Category` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`IngredientID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

/*Table structure for table `recipeingredients` */

DROP TABLE IF EXISTS `recipeingredients`;

CREATE TABLE `recipeingredients` (
  `RecipeID` varchar(255) NOT NULL,
  `IngredientID` varchar(255) NOT NULL,
  `Quantity` decimal(8,2) DEFAULT NULL,
  `Unit` varchar(20) DEFAULT NULL,
  KEY `RecipeID` (`RecipeID`),
  KEY `IngredientID` (`IngredientID`),
  CONSTRAINT `recipeingredients_ibfk_1` FOREIGN KEY (`RecipeID`) REFERENCES `recipes` (`RecipeID`),
  CONSTRAINT `recipeingredients_ibfk_2` FOREIGN KEY (`IngredientID`) REFERENCES `ingredients` (`IngredientID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

/*Table structure for table `recipes` */

DROP TABLE IF EXISTS `recipes`;

CREATE TABLE `recipes` (
  `RecipeID` varchar(255) NOT NULL,
  `Username` varchar(100) DEFAULT NULL,
  `Title` varchar(255) NOT NULL,
  `Description` text DEFAULT NULL,
  `Instructions` text DEFAULT NULL,
  `PrepTime` int(11) DEFAULT NULL,
  `CookTime` int(11) DEFAULT NULL,
  `TotalTime` int(11) DEFAULT NULL,
  `Servings` int(11) DEFAULT NULL,
  `URL` varchar(255) DEFAULT NULL,
  `CreatedAt` timestamp NULL DEFAULT current_timestamp(),
  `UpdatedAt` timestamp NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  PRIMARY KEY (`RecipeID`),
  KEY `Username` (`Username`),
  CONSTRAINT `recipes_ibfk_1` FOREIGN KEY (`Username`) REFERENCES `user` (`username`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

/*Table structure for table `recipetags` */

DROP TABLE IF EXISTS `recipetags`;

CREATE TABLE `recipetags` (
  `RecipeID` int(11) NOT NULL,
  `TagID` int(10) unsigned NOT NULL,
  KEY `RecipeID` (`RecipeID`),
  KEY `TagID` (`TagID`),
  CONSTRAINT `recipetags_ibfk_2` FOREIGN KEY (`TagID`) REFERENCES `tags` (`TagID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

/*Table structure for table `tags` */

DROP TABLE IF EXISTS `tags`;

CREATE TABLE `tags` (
  `TagID` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `TagName` varchar(50) NOT NULL,
  PRIMARY KEY (`TagID`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

/*Table structure for table `user` */

DROP TABLE IF EXISTS `user`;

CREATE TABLE `user` (
  `username` varchar(100) NOT NULL,
  `password` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`username`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
