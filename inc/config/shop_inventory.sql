-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: May 27, 2021 at 08:46 AM
-- Server version: 10.4.13-MariaDB
-- PHP Version: 7.4.8

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `shop_inventory`
--

-- --------------------------------------------------------

--
-- Table structure for table `customer`
--

CREATE TABLE `customer` (
  `customerID` int(11) NOT NULL,
  `fullName` varchar(100) NOT NULL,
  `email` varchar(100) DEFAULT NULL,
  `mobile` int(11) NOT NULL,
  `phone2` int(11) DEFAULT NULL,
  `address` varchar(255) NOT NULL,
  `address2` varchar(255) DEFAULT NULL,
  `city` varchar(30) DEFAULT NULL,
  `district` varchar(30) NOT NULL,
  `status` varchar(255) NOT NULL DEFAULT 'Active',
  `createdOn` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `customer`
--

INSERT INTO `customer` (`customerID`, `fullName`, `email`, `mobile`, `phone2`, `address`, `address2`, `city`, `district`, `status`, `createdOn`) VALUES
(4, 'Bill Gates', 'bill@microsoft.com', 993737, 772484884, '45, Palo Alto House, Marine Drive', 'South Carolina', 'Microsoft', 'Kurunegala', 'Active', '2021-03-28 15:14:02'),
(14, 'Steve Jobs', 'sjobs@apple.com', 333829832, 0, '1st Floor, Apple House, ', 'Las Vegas Street', 'Las Vegas', 'Monaragala', 'Disabled', '2021-03-28 12:03:10'),
(18, 'Asitha Silva', 'asitha@gmail.com', 777987654, 0, 'No. 3, Radcliff Avenue, School Lane', 'Kalutara South', 'Kalutara', 'Kalutara', 'Active', '2021-03-28 09:52:28'),
(24, 'Sunil Perera', 'Sunil@gypsies.sound', 338393932, 413837293, '67/7, Perera Villa, Jayasekara Avenue', 'Mount Lavinia', 'Ratmalana', 'Colombo', 'Active', '2021-03-28 10:48:37'),
(25, 'Theresa May', 'may34@uk.gov.com', 329393903, 777833737, '12, Downing Street', 'London', 'London', 'Matale', 'Active', '2021-03-28 02:28:07'),
(26, 'Sachin Tendulkar', 'sachintendulkar@icc.com', 444958303, 84792838, '789-4, Apartment 3, ', 'Cric Complex', 'New Delhi', 'Puttalam', 'Active', '2021-03-28 02:28:38'),
(38, 'Nuwan Perara', 'nuwan@yahoo.com', 839378202, 0, 'Nuwan Villa, Lower Street,', 'North Mulativu', 'Mullaitivu', 'Mullaitivu', 'Active', '2021-03-28 11:17:49'),
(39, 'Amal Silverton', 'amals452@yahoo.com', 232345676, 0, 'Amal\'s House, Amal\'s Street,', 'Amal Road', 'Ambalangoda', 'Galle', 'Active', '2021-03-28 13:27:06'),
(40, 'Andrew Symonds', 'symonds@cricket.au.com', 123, 0, '23, Oak View Avenue', 'Western Australia', 'Melbourne', 'Colombo', 'Disabled', '2021-03-28 01:20:23'),
(41, 'Mark Taylor', '', 111, 0, '111', '', '', 'Colombo', 'Active', '2021-03-28 01:24:54'),
(42, 'Nelson Mandela', 'sjobs@apple.com', 333829832, 0, '1st Floor, Apple House, ', 'Las Vegas Street', 'Las Vegas', 'Kalutara', 'Disabled', '2021-03-28 02:39:41');

-- --------------------------------------------------------

--
-- Table structure for table `item`
--

CREATE TABLE `item` (
  `productID` int(11) NOT NULL,
  `itemNumber` varchar(255) NOT NULL,
  `itemName` varchar(255) NOT NULL,
  `discount` float NOT NULL DEFAULT 0,
  `stock` int(11) NOT NULL DEFAULT 0,
  `unitPrice` float NOT NULL DEFAULT 0,
  `imageURL` varchar(255) NOT NULL DEFAULT 'imageNotAvailable.jpg',
  `status` varchar(255) NOT NULL DEFAULT 'Active',
  `description` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `item`
--

INSERT INTO `item` (`productID`, `itemNumber`, `itemName`, `discount`, `stock`, `unitPrice`, `imageURL`, `status`, `description`) VALUES
(50, '1', 'Combiflam Tablet', 1, 400, 50, '1617441984_combiflam.jpg', 'Active', 'Painkiller'),
(51, '2', 'Zeet Expectorant', 2, 80, 85, '1617442506_zeet.jpg', 'Active', 'Cough Syrup'),
(52, '3', 'Procal Powder', 3, 20, 185, '1617442524_procal.jpg', 'Active', 'Protein Supplement'),
(53, '4', 'Fabiflu 200 Tablet', 1, 40, 1400, '1617442541_fabiflu.jpg', 'Active', 'COVID Medicine'),
(54, '5', 'Nupenta DSR Capsule', 2, 60, 55, '1617442557_nupenta.jpg', 'Active', 'Acidity Medicine'),
(55, '6', 'Crocin Tablet', 2, 400, 35, '1617442571_crocin.jpg', 'Active', 'For Headache'),
(56, '7', 'T-bact 5g Ointment', 2, 20, 75, '1617442587_t-bact.jpg', 'Active', 'Antibiotic Ointment'),
(57, '8', 'Mosi Eye Drop', 2, 25, 65, '1617442603_mosi.jpg', 'Active', 'For Eye Strains'),
(58, '9', 'Valparin 200 Tablet', 2, 35, 90, '1617442620_valparin.jpg', 'Active', 'Anti-epileptics');

-- --------------------------------------------------------

--
-- Table structure for table `purchase`
--

CREATE TABLE `purchase` (
  `purchaseID` int(11) NOT NULL,
  `invoiceNumber` varchar(255) NOT NULL,
  `itemNumber` varchar(255) NOT NULL,
  `purchaseDate` date NOT NULL,
  `itemName` varchar(255) NOT NULL,
  `unitPrice` float NOT NULL DEFAULT 0,
  `quantity` int(11) NOT NULL DEFAULT 0,
  `vendorName` varchar(255) NOT NULL DEFAULT 'Test Vendor',
  `vendorID` int(11) NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `purchase`
--

INSERT INTO `purchase` (`purchaseID`, `invoiceNumber`, `itemNumber`, `purchaseDate`, `itemName`, `unitPrice`, `quantity`, `vendorName`, `vendorID`) VALUES
(53, 'ABC111', '1', '2021-03-28', 'Combiflam Tablet', 50, 50, 'Sanofi', 1),
(54, 'ABC112', '2', '2021-03-28', 'Zeet Expectorant', 85, 20, 'FDC', 8),
(55, 'ABC113', '3', '2021-03-28', 'Procal Powder', 185, 10, 'Glaxo SmithKline', 3),
(56, 'ABC114', '4', '2021-03-20', 'Fabiflu 200 Tablet', 1400, 25, 'Glenmark', 2),
(57, 'ABC115', '5', '2021-03-20', 'Nupenta DSR Capsule', 55, 20, 'Ranbaxy', 7),
(58, 'ABC116', '6', '2021-03-20', 'Crocin Tablet', 35, 100, 'Cipla', 6),
(59, 'ABC117', '7', '2021-03-20', 'T-bact 5g Ointment', 75, 10, 'Emcure', 4),
(60, 'ABC118', '8', '2021-02-01', 'Mosi Eye Drop', 65, 5, 'FDC', 8),
(61, 'ABC119', '9', '2021-02-01', 'Valparin 200 Tablet', 90, 15, 'Glenmark', 2);

-- --------------------------------------------------------

--
-- Table structure for table `purchasedata`
--

CREATE TABLE `purchasedata` (
  `id` int(20) NOT NULL,
  `product_name` varchar(30) NOT NULL,
  `invoice_number` varchar(30) NOT NULL,
  `quantity` int(11) NOT NULL,
  `unit_price` int(11) NOT NULL,
  `total_price` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `purchasedata`
--

INSERT INTO `purchasedata` (`id`, `product_name`, `invoice_number`, `quantity`, `unit_price`, `total_price`) VALUES
(1, 'Combiflam Tablet', 'OPT567', 2, 50, 100),
(2, 'Procal Powder', 'OPT567', 2, 185, 370);

-- --------------------------------------------------------

--
-- Table structure for table `sale`
--

CREATE TABLE `sale` (
  `saleID` int(11) NOT NULL,
  `itemNumber` varchar(255) NOT NULL,
  `customerID` int(11) NOT NULL,
  `customerName` varchar(255) NOT NULL,
  `itemName` varchar(255) NOT NULL,
  `saleDate` date NOT NULL,
  `discount` float NOT NULL DEFAULT 0,
  `quantity` int(11) NOT NULL DEFAULT 0,
  `unitPrice` float(10,0) NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `sale`
--

INSERT INTO `sale` (`saleID`, `itemNumber`, `customerID`, `customerName`, `itemName`, `saleDate`, `discount`, `quantity`, `unitPrice`) VALUES
(18, '1', 14, 'Steve Jobs', 'Combiflam Tablet', '2021-02-01', 1, 50, 50),
(19, '2', 18, 'Asitha Silva', 'Zeet Expectorant', '2021-02-01', 2, 10, 85),
(20, '3', 41, 'Mark Taylor', 'Procal Powder', '2021-02-01', 3, 5, 185),
(21, '4', 24, 'Sunil Perera', 'Fabiflu 200 Tablet', '2021-03-20', 1, 7, 1400),
(22, '5', 25, 'Theresa May', 'Nupenta DSR Capsule', '2021-03-20', 2, 10, 55),
(23, '6', 42, 'Nelson Mandela', 'Crocin Tablet', '2021-03-20', 2, 60, 35),
(24, '7', 39, 'Amal Silverton', 'T-bact 5g Ointment', '2021-03-20', 2, 6, 75),
(25, '8', 38, 'Nuwan Perara', 'Mosi Eye Drop', '2021-03-28', 2, 5, 65),
(26, '9', 26, 'Sachin Tendulkar', 'Valparin 200 Tablet', '2021-03-28', 2, 5, 90);

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

CREATE TABLE `user` (
  `userID` int(11) NOT NULL,
  `fullName` varchar(255) NOT NULL,
  `username` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `status` varchar(255) NOT NULL DEFAULT 'Active'
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`userID`, `fullName`, `username`, `password`, `status`) VALUES
(5, 'Guest', 'guest', '81dc9bdb52d04dc20036dbd8313ed055', 'Active'),
(6, 'user12345', 'user12345', '80ec08504af83331911f5882349af59d', 'Active');

-- --------------------------------------------------------

--
-- Table structure for table `vendor`
--

CREATE TABLE `vendor` (
  `vendorID` int(11) NOT NULL,
  `fullName` varchar(255) NOT NULL,
  `email` varchar(255) DEFAULT NULL,
  `mobile` int(11) NOT NULL,
  `phone2` int(11) DEFAULT NULL,
  `address` varchar(255) NOT NULL,
  `address2` varchar(255) DEFAULT NULL,
  `city` varchar(30) DEFAULT NULL,
  `district` varchar(30) NOT NULL,
  `status` varchar(255) NOT NULL DEFAULT 'Active',
  `createdOn` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `vendor`
--

INSERT INTO `vendor` (`vendorID`, `fullName`, `email`, `mobile`, `phone2`, `address`, `address2`, `city`, `district`, `status`, `createdOn`) VALUES
(1, 'Sanofi', 'shubham@sanofi.com', 2343567, 0, '80, Ground Floor, ABC Shopping Complex', '46th Avenue', 'Kolpetty', 'Colombo', 'Active', '2021-03-28 05:48:44'),
(2, 'Glenmark', 'shubham@gm.com', 99828282, 283730183, '123, A Road, B avenue', 'Pitipana', 'Nugegoda', 'Mannar', 'Active', '2021-03-28 06:12:02'),
(3, 'Glaxo SmithKline', 'shubham@gsk.com', 32323, 0, '34, Malwatta Road, Kottawa', 'Pannipitiya', 'Maharagama', 'Colombo', 'Active', '2021-03-28 06:28:33'),
(4, 'Emcure', 'shubham@emcure.com', 323234938, 0, '45, Palmer Valley, 5th Crossing', 'Delaware', 'Palo Alto', 'Batticaloa', 'Active', '2021-03-28 06:29:41'),
(5, 'Cipla', 'shubham@cipla.com', 43434, 47569937, 'Test address', 'Test address 2', 'Test City', 'Trincomalee', 'Active', '2021-03-28 06:53:14'),
(6, 'Ranbaxy', 'shubham@ranbaxy.com', 1111, 0, 'Sea Road, Bambalapitiya', '', '', 'Colombo', 'Active', '2021-03-28 10:36:54'),
(7, 'FDC', 'shubham@fdc.com', 191938930, 0, '123, A Road, B avenue, ', 'Gilford Crescent', 'Colpetty', 'Colombo', 'Active', '2021-03-28 12:36:53');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `customer`
--
ALTER TABLE `customer`
  ADD PRIMARY KEY (`customerID`);

--
-- Indexes for table `item`
--
ALTER TABLE `item`
  ADD PRIMARY KEY (`productID`);

--
-- Indexes for table `purchase`
--
ALTER TABLE `purchase`
  ADD PRIMARY KEY (`purchaseID`);

--
-- Indexes for table `purchasedata`
--
ALTER TABLE `purchasedata`
  ADD PRIMARY KEY (`id`) USING BTREE;

--
-- Indexes for table `sale`
--
ALTER TABLE `sale`
  ADD PRIMARY KEY (`saleID`);

--
-- Indexes for table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`userID`);

--
-- Indexes for table `vendor`
--
ALTER TABLE `vendor`
  ADD PRIMARY KEY (`vendorID`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `customer`
--
ALTER TABLE `customer`
  MODIFY `customerID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=43;

--
-- AUTO_INCREMENT for table `item`
--
ALTER TABLE `item`
  MODIFY `productID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=59;

--
-- AUTO_INCREMENT for table `purchase`
--
ALTER TABLE `purchase`
  MODIFY `purchaseID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=62;

--
-- AUTO_INCREMENT for table `purchasedata`
--
ALTER TABLE `purchasedata`
  MODIFY `id` int(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `sale`
--
ALTER TABLE `sale`
  MODIFY `saleID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=27;

--
-- AUTO_INCREMENT for table `user`
--
ALTER TABLE `user`
  MODIFY `userID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `vendor`
--
ALTER TABLE `vendor`
  MODIFY `vendorID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
