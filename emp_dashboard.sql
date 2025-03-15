-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Mar 15, 2025 at 12:37 PM
-- Server version: 10.4.27-MariaDB
-- PHP Version: 8.0.25

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `emp_dashboard`
--

-- --------------------------------------------------------

--
-- Table structure for table `employee`
--

CREATE TABLE `employee` (
  `ID` varchar(255) NOT NULL,
  `Name` varchar(255) NOT NULL,
  `Position` varchar(150) NOT NULL,
  `Department` varchar(200) NOT NULL,
  `Email` varchar(255) NOT NULL,
  `Phone` varchar(100) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `employee`
--

INSERT INTO `employee` (`ID`, `Name`, `Position`, `Department`, `Email`, `Phone`, `created_at`, `updated_at`) VALUES
('46cfbd47-5b39-439c-bc53-1b0482918780', 'Vivek', 'UX Designer', 'Design', 'vivek@gmail.com', '7080901123', '2025-03-15 09:39:07', '2025-03-15 11:24:33'),
('714926ca-3214-4b59-a797-555b72a0fe92', 'Rakesh', 'Software Engineer', 'Engineering', 'rakesh@gmail.com', '9898586453', '2025-03-15 09:35:19', '2025-03-15 09:35:19'),
('d4ebe498-3111-4120-8a2d-05171ecc4cef', 'Vikash', 'Product Manager', 'Product', 'vikash@gmail.com', '9897655672', '2025-03-15 09:38:12', '2025-03-15 09:38:12');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `employee`
--
ALTER TABLE `employee`
  ADD PRIMARY KEY (`ID`),
  ADD UNIQUE KEY `Email` (`Email`),
  ADD UNIQUE KEY `Phone` (`Phone`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
