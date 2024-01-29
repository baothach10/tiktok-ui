-- CreateTable
CREATE TABLE `users` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `avatar` VARCHAR(191) NOT NULL DEFAULT 'server/public/assets/images/placeholder-user.png',
    `nickname` VARCHAR(191) NOT NULL,
    `fullName` VARCHAR(191) NOT NULL,
    `checked` BOOLEAN NOT NULL DEFAULT false,
    `following` BIGINT NOT NULL DEFAULT 0,
    `followers` BIGINT NOT NULL DEFAULT 0,
    `likes` BIGINT NOT NULL DEFAULT 0,
    `bio` VARCHAR(191) NULL,
    `link` VARCHAR(191) NULL,
    `assignedAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `playlists` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `cover` VARCHAR(191) NOT NULL,
    `title` VARCHAR(191) NOT NULL,
    `userID` INTEGER NOT NULL,
    `assignedAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `posts` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `title` VARCHAR(191) NOT NULL,
    `music` VARCHAR(191) NOT NULL DEFAULT '',
    `video` VARCHAR(191) NOT NULL,
    `likes` BIGINT NOT NULL DEFAULT 0,
    `comments` BIGINT NOT NULL DEFAULT 0,
    `saved` BIGINT NOT NULL DEFAULT 0,
    `share` BIGINT NOT NULL DEFAULT 0,
    `views` BIGINT NOT NULL DEFAULT 0,
    `userID` INTEGER NOT NULL,
    `assignedAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `playlistPosts` (
    `postID` INTEGER NOT NULL,
    `playlistID` INTEGER NOT NULL,
    `assignedAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`playlistID`, `postID`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `playlists` ADD CONSTRAINT `playlists_userID_fkey` FOREIGN KEY (`userID`) REFERENCES `users`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `posts` ADD CONSTRAINT `posts_userID_fkey` FOREIGN KEY (`userID`) REFERENCES `users`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `playlistPosts` ADD CONSTRAINT `playlistPosts_postID_fkey` FOREIGN KEY (`postID`) REFERENCES `posts`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `playlistPosts` ADD CONSTRAINT `playlistPosts_playlistID_fkey` FOREIGN KEY (`playlistID`) REFERENCES `playlists`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
