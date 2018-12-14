-- phpMyAdmin SQL Dump
-- version 4.8.3
-- https://www.phpmyadmin.net/
--
-- Host: localhost:8889
-- Generation Time: Dec 14, 2018 at 12:11 AM
-- Server version: 5.7.23
-- PHP Version: 7.2.8

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `db_infographic`
--

-- --------------------------------------------------------

--
-- Table structure for table `tbl_continents`
--

CREATE TABLE `tbl_continents` (
  `continent_id` smallint(6) NOT NULL,
  `continent_name` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `tbl_continents`
--

INSERT INTO `tbl_continents` (`continent_id`, `continent_name`) VALUES
(1, 'North America'),
(2, 'Europe'),
(3, 'Africa'),
(4, 'Asia'),
(5, 'South America'),
(6, 'Australia');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_continents_country`
--

CREATE TABLE `tbl_continents_country` (
  `continent_country_id` smallint(6) NOT NULL,
  `continent_id` smallint(6) NOT NULL,
  `country_id` smallint(6) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `tbl_continents_country`
--

INSERT INTO `tbl_continents_country` (`continent_country_id`, `continent_id`, `country_id`) VALUES
(1, 5, 1),
(2, 6, 2),
(3, 2, 3),
(4, 5, 4),
(5, 5, 5),
(6, 1, 6),
(7, 2, 7),
(8, 2, 8),
(9, 3, 9),
(10, 2, 10),
(11, 2, 11),
(12, 2, 12),
(13, 2, 13),
(14, 4, 14),
(15, 4, 15),
(16, 1, 16),
(17, 3, 17),
(18, 3, 18),
(19, 1, 19),
(20, 5, 20),
(21, 2, 21),
(22, 2, 22),
(23, 2, 23),
(24, 4, 24),
(25, 3, 25),
(26, 2, 26),
(27, 4, 27),
(28, 2, 28),
(29, 2, 29),
(30, 2, 30),
(31, 3, 31),
(32, 5, 32);

-- --------------------------------------------------------

--
-- Table structure for table `tbl_country`
--

CREATE TABLE `tbl_country` (
  `country_id` smallint(6) NOT NULL,
  `country_name` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `tbl_country`
--

INSERT INTO `tbl_country` (`country_id`, `country_name`) VALUES
(1, 'Argentina'),
(2, 'Australia'),
(3, 'Belgium'),
(4, 'Brazil'),
(5, 'Colombia'),
(6, 'Costa Rica'),
(7, 'Croatia'),
(8, 'Denmark'),
(9, 'Egypt'),
(10, 'England'),
(11, 'France'),
(12, 'Germany'),
(13, 'Iceland'),
(14, 'Iran'),
(15, 'Japan'),
(16, 'Mexico'),
(17, 'Morocco'),
(18, 'Nigeria'),
(19, 'Panama'),
(20, 'Peru'),
(21, 'Poland'),
(22, 'Portugal'),
(23, 'Russia'),
(24, 'Saudi Arabia'),
(25, 'Senegal'),
(26, 'Serbia'),
(27, 'South Korea'),
(28, 'Spain'),
(29, 'Sweden'),
(30, 'Switzerland'),
(31, 'Tunisia'),
(32, 'Uruguay');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `tbl_continents`
--
ALTER TABLE `tbl_continents`
  ADD PRIMARY KEY (`continent_id`);

--
-- Indexes for table `tbl_continents_country`
--
ALTER TABLE `tbl_continents_country`
  ADD PRIMARY KEY (`continent_country_id`);

--
-- Indexes for table `tbl_country`
--
ALTER TABLE `tbl_country`
  ADD PRIMARY KEY (`country_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `tbl_continents`
--
ALTER TABLE `tbl_continents`
  MODIFY `continent_id` smallint(6) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `tbl_continents_country`
--
ALTER TABLE `tbl_continents_country`
  MODIFY `continent_country_id` smallint(6) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=33;

--
-- AUTO_INCREMENT for table `tbl_country`
--
ALTER TABLE `tbl_country`
  MODIFY `country_id` smallint(6) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=33;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
