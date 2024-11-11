/*
  Warnings:

  - You are about to drop the `AttendanceRecord` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Client` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Component` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Employee` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `EmployeeProject` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `EmployeeTraining` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Manager` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Order` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `OrderComponent` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `PaymentRecord` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `PerformanceRecerd` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Project` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `ProjectComponent` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Skill` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Training` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `User` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `AttendanceRecord` DROP FOREIGN KEY `AttendanceRecord_employeeId_fkey`;

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
ALTER TABLE `OrderComponent` DROP FOREIGN KEY `OrderComponent_componentId_fkey`;

-- DropForeignKey
ALTER TABLE `OrderComponent` DROP FOREIGN KEY `OrderComponent_orderId_fkey`;

-- DropForeignKey
ALTER TABLE `PaymentRecord` DROP FOREIGN KEY `PaymentRecord_employeeId_fkey`;

-- DropForeignKey
ALTER TABLE `PerformanceRecerd` DROP FOREIGN KEY `PerformanceRecerd_employeeProjectEmployeeId_employeeProject_fkey`;

-- DropForeignKey
ALTER TABLE `ProjectComponent` DROP FOREIGN KEY `ProjectComponent_componentId_fkey`;

-- DropForeignKey
ALTER TABLE `ProjectComponent` DROP FOREIGN KEY `ProjectComponent_projectId_fkey`;

-- DropForeignKey
ALTER TABLE `Skill` DROP FOREIGN KEY `Skill_employeeId_fkey`;

-- DropTable
DROP TABLE `AttendanceRecord`;

-- DropTable
DROP TABLE `Client`;

-- DropTable
DROP TABLE `Component`;

-- DropTable
DROP TABLE `Employee`;

-- DropTable
DROP TABLE `EmployeeProject`;

-- DropTable
DROP TABLE `EmployeeTraining`;

-- DropTable
DROP TABLE `Manager`;

-- DropTable
DROP TABLE `Order`;

-- DropTable
DROP TABLE `OrderComponent`;

-- DropTable
DROP TABLE `PaymentRecord`;

-- DropTable
DROP TABLE `PerformanceRecerd`;

-- DropTable
DROP TABLE `Project`;

-- DropTable
DROP TABLE `ProjectComponent`;

-- DropTable
DROP TABLE `Skill`;

-- DropTable
DROP TABLE `Training`;

-- DropTable
DROP TABLE `User`;
