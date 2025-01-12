-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jan 12, 2025 at 05:49 AM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `db_university`
--

-- --------------------------------------------------------

--
-- Table structure for table `data_mahasiswa`
--

CREATE TABLE `data_mahasiswa` (
  `id` int(11) NOT NULL,
  `nim` int(11) NOT NULL,
  `nama` varchar(45) NOT NULL,
  `jurusan` varchar(45) NOT NULL,
  `fakultas` varchar(45) NOT NULL,
  `domisili` varchar(45) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `data_mahasiswa`
--

INSERT INTO `data_mahasiswa` (`id`, `nim`, `nama`, `jurusan`, `fakultas`, `domisili`) VALUES
(121, 1122001, 'Andi Saputra', 'Informatika', 'Fakultas Ilmu Komputer', 'Jakarta'),
(122, 1122002, 'Rahmat Tahalu', 'Hukum Tata Negara', 'Fakultas Hukum', 'Depok'),
(123, 1122003, 'Citra Dewi', 'Kedokteran', 'Fakultas Kedokteran', 'Surabaya'),
(124, 1122004, 'Doni Prabowo', 'Hukum', 'Fakultas Hukum', 'Medan'),
(125, 1122005, 'Eka Agustina', 'Psikologi', 'Fakultas Psikologi', 'Batam'),
(126, 1122006, 'Fajar Laksana', 'Matematika', 'Fakultas MIPA', 'Yogyakarta'),
(127, 1122007, 'Gita Amelia', 'Akuntansi', 'Fakultas Ekonomi', 'Palembang'),
(128, 1122008, 'Hendra Wijaya', 'Desain Komunikasi Visual', 'Fakultas Seni Rupa', 'Semarang'),
(129, 1122009, 'Intan Permatasari', 'Seni Musik', 'Fakultas Seni Pertunjukan', 'Bali'),
(130, 1122010, 'Joko Susanto', 'Teknik Elektro', 'Fakultas Teknik', 'Surabaya'),
(131, 1122011, 'Kirana Putri', 'Ilmu Komunikasi', 'Fakultas Ilmu Sosial', 'Jakarta'),
(132, 1122012, 'Lukman Hakim', 'Sosiologi', 'Fakultas Ilmu Sosial', 'Banjarmasin'),
(133, 1122013, 'Martha Sari', 'Ilmu Kesehatan', 'Fakultas Kesehatan', 'Makassar'),
(134, 1122014, 'Nugroho Aji', 'Biologi', 'Fakultas MIPA', 'Medan'),
(135, 1122015, 'Oka Sari', 'Ekonomi Syariah', 'Fakultas Ekonomi', 'Batam'),
(136, 1122016, 'Putu Arya', 'Sastra Inggris', 'Fakultas Sastra', 'Bali'),
(137, 1122017, 'Rina Sari', 'Ilmu Lingkungan', 'Fakultas Ilmu Lingkungan', 'Jakarta'),
(138, 1122018, 'Sandi Prasetyo', 'Manajemen', 'Fakultas Ekonomi', 'Bandung'),
(139, 1122019, 'Tina Kartika', 'Statistika', 'Fakultas MIPA', 'Yogyakarta'),
(140, 1122020, 'Udin Hidayat', 'Teknik Informatika', 'Fakultas Teknik', 'Jakarta'),
(141, 1122021, 'Vina Rahmawati', 'Biokimia', 'Fakultas MIPA', 'Palembang'),
(142, 1122022, 'Wawan Setiawan', 'Ilmu Pangan', 'Fakultas Pertanian', 'Surabaya'),
(143, 1122023, 'Xena Lestari', 'Manajemen Sumber Daya Manusia', 'Fakultas Ekonomi', 'Jakarta'),
(144, 1122024, 'Yulianti Sari', 'Pendidikan Bahasa Inggris', 'Fakultas Keguruan', 'Semarang'),
(145, 1122025, 'Zainal Abidin', 'Pemrograman', 'Fakultas Ilmu Komputer', 'Bandung');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `data_mahasiswa`
--
ALTER TABLE `data_mahasiswa`
  ADD PRIMARY KEY (`id`,`nim`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `data_mahasiswa`
--
ALTER TABLE `data_mahasiswa`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=175;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
