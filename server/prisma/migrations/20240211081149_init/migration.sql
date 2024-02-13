/*
  Warnings:

  - You are about to drop the column `assignedAt` on the `playlistPosts` table. All the data in the column will be lost.
  - You are about to drop the column `assignedAt` on the `playlists` table. All the data in the column will be lost.
  - You are about to drop the column `assignedAt` on the `posts` table. All the data in the column will be lost.
  - You are about to drop the column `assignedAt` on the `users` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `playlistPosts` DROP COLUMN `assignedAt`,
    ADD COLUMN `createdDate` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3);

-- AlterTable
ALTER TABLE `playlists` DROP COLUMN `assignedAt`,
    ADD COLUMN `createdDate` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3);

-- AlterTable
ALTER TABLE `posts` DROP COLUMN `assignedAt`,
    ADD COLUMN `createdDate` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3);

-- AlterTable
ALTER TABLE `users` DROP COLUMN `assignedAt`,
    ADD COLUMN `createDate` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3);
