-- ============================================================
-- Database: zainab_portfolio
-- Ye schema pehle database banata hai, phir contact_messages
-- table jahan contact form ke saare messages store honge.
-- Run karne ka tareeqa: mysql -u root -p < schema.sql
-- ============================================================

CREATE DATABASE IF NOT EXISTS zainab_portfolio;
USE zainab_portfolio;

CREATE TABLE IF NOT EXISTS contact_messages (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(150) NOT NULL,
  email VARCHAR(150) NOT NULL,
  message TEXT NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
