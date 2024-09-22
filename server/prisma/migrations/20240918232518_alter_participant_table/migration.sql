/*
  Warnings:

  - You are about to drop the column `createdAt` on the `participant` table. All the data in the column will be lost.
  - You are about to drop the column `email` on the `participant` table. All the data in the column will be lost.
  - You are about to drop the column `name` on the `participant` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `participant` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[userId,productId]` on the table `Participant` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `userId` to the `Participant` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX `Participant_email_key` ON `participant`;

-- AlterTable
ALTER TABLE `participant` DROP COLUMN `createdAt`,
    DROP COLUMN `email`,
    DROP COLUMN `name`,
    DROP COLUMN `updatedAt`,
    ADD COLUMN `userId` VARCHAR(191) NOT NULL,
    ADD COLUMN `mainImage` VARCHAR(191) NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX `Participant_userId_productId_key` ON `Participant`(`userId`, `productId`);

-- AddForeignKey
ALTER TABLE `Participant` ADD CONSTRAINT `Participant_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Participant` ADD CONSTRAINT `Participant_productId_fkey` FOREIGN KEY (`productId`) REFERENCES `Product`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
