-- phpMyAdmin SQL Dump
-- version 4.0.9
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Generation Time: Apr 29, 2014 at 04:04 PM
-- Server version: 5.6.14
-- PHP Version: 5.5.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Database: `icefire`
--

-- --------------------------------------------------------

--
-- Table structure for table `tbl_housing_association`
--

CREATE TABLE IF NOT EXISTS `tbl_housing_association` (
  `housing_ass_id` int(11) NOT NULL AUTO_INCREMENT,
  `housing_ass_name` varchar(20) NOT NULL,
  `country_id` int(11) NOT NULL,
  `m_id` int(11) NOT NULL,
  `address` varchar(20) NOT NULL,
  `building_password` varchar(20) NOT NULL,
  `telephone_no` varchar(20) NOT NULL,
  `emergency_contact` varchar(20) NOT NULL,
  `email` varchar(20) NOT NULL,
  PRIMARY KEY (`housing_ass_id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=2 ;

--
-- Dumping data for table `tbl_housing_association`
--

INSERT INTO `tbl_housing_association` (`housing_ass_id`, `housing_ass_name`, `country_id`, `m_id`, `address`, `building_password`, `telephone_no`, `emergency_contact`, `email`) VALUES
(1, 'shahzad housing asso', 1, 1, 'kalm chook', '1122', '03336320987', '063224488', 'shahzad@gmail.com');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_municipality`
--

CREATE TABLE IF NOT EXISTS `tbl_municipality` (
  `m_id` int(11) NOT NULL AUTO_INCREMENT,
  `m_name` varchar(20) NOT NULL,
  `state_id` int(11) NOT NULL,
  PRIMARY KEY (`m_id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=2 ;

--
-- Dumping data for table `tbl_municipality`
--

INSERT INTO `tbl_municipality` (`m_id`, `m_name`, `state_id`) VALUES
(1, 'bahwalnager', 1);

-- --------------------------------------------------------

--
-- Table structure for table `tbl_news_feed`
--

CREATE TABLE IF NOT EXISTS `tbl_news_feed` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(20) NOT NULL,
  `email` varchar(20) NOT NULL,
  `phone` varchar(20) NOT NULL,
  `description` varchar(250) NOT NULL,
  `image` varchar(20) NOT NULL,
  `user_id` int(11) NOT NULL,
  `type_of_news` varchar(20) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1 AUTO_INCREMENT=1 ;

-- --------------------------------------------------------

--
-- Table structure for table `tbl_state`
--

CREATE TABLE IF NOT EXISTS `tbl_state` (
  `state_id` int(11) NOT NULL AUTO_INCREMENT,
  `state_name` varchar(20) NOT NULL,
  `country_id` int(11) NOT NULL,
  PRIMARY KEY (`state_id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=4 ;

--
-- Dumping data for table `tbl_state`
--

INSERT INTO `tbl_state` (`state_id`, `state_name`, `country_id`) VALUES
(1, 'united state', 1),
(2, 'calefunia', 1),
(3, 'pakistan2', 2);

-- --------------------------------------------------------

--
-- Table structure for table `tbl_users`
--

CREATE TABLE IF NOT EXISTS `tbl_users` (
  `user_id` int(11) NOT NULL AUTO_INCREMENT,
  `user_name` varchar(20) NOT NULL,
  `user_email` varchar(20) NOT NULL,
  `user_password` varchar(20) NOT NULL,
  PRIMARY KEY (`user_id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1 AUTO_INCREMENT=1 ;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
