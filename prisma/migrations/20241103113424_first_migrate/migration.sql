/*
  Warnings:

  - You are about to drop the `Client` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Employee` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `EmployeeProject` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `EmployeeTraining` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Manager` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `PerformanceRecerd` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Project` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Record` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Training` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `User` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `Client` DROP FOREIGN KEY `Client_userId_fkey`;

-- DropForeignKey
ALTER TABLE `Employee` DROP FOREIGN KEY `Employee_userId_fkey`;

-- DropForeignKey
ALTER TABLE `EmployeeProject` DROP FOREIGN KEY `EmployeeProject_employeeId_fkey`;

-- DropForeignKey
ALTER TABLE `EmployeeProject` DROP FOREIGN KEY `EmployeeProject_projectId_fkey`;

-- DropForeignKey
ALTER TABLE `EmployeeTraining` DROP FOREIGN KEY `EmployeeTraining_employeeId_fkey`;

-- DropForeignKey
ALTER TABLE `EmployeeTraining` DROP FOREIGN KEY `EmployeeTraining_trainingId_fkey`;

-- DropForeignKey
ALTER TABLE `Manager` DROP FOREIGN KEY `Manager_userId_fkey`;

-- DropForeignKey
ALTER TABLE `PerformanceRecerd` DROP FOREIGN KEY `PerformanceRecerd_employeeProjectEmployeeId_employeeProject_fkey`;

-- DropForeignKey
ALTER TABLE `Record` DROP FOREIGN KEY `Record_employeeId_fkey`;

-- DropTable
DROP TABLE `Client`;

-- DropTable
DROP TABLE `Employee`;

-- DropTable
DROP TABLE `EmployeeProject`;

-- DropTable
DROP TABLE `EmployeeTraining`;

-- DropTable
DROP TABLE `Manager`;

-- DropTable
DROP TABLE `PerformanceRecerd`;

-- DropTable
DROP TABLE `Project`;

-- DropTable
DROP TABLE `Record`;

-- DropTable
DROP TABLE `Training`;

-- DropTable
DROP TABLE `User`;
