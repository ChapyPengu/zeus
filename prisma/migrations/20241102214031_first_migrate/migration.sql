-- AlterTable
ALTER TABLE `Record` MODIFY `absent` BOOLEAN NOT NULL DEFAULT false,
    MODIFY `justified` BOOLEAN NULL,
    MODIFY `extras` INTEGER NOT NULL DEFAULT 0;