/*
  Warnings:

  - You are about to drop the column `speciality` on the `doctor` table. All the data in the column will be lost.
  - Added the required column `specialization` to the `Doctor` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `doctor` DROP COLUMN `speciality`,
    ADD COLUMN `specialization` VARCHAR(191) NOT NULL;
