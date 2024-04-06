/*
  Warnings:

  - You are about to drop the column `describtion` on the `book` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `book` DROP COLUMN `describtion`,
    ADD COLUMN `description` VARCHAR(191) NULL,
    MODIFY `datePublished` DATE NULL;
