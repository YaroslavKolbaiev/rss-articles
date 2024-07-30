/*
  Warnings:

  - Added the required column `approved` to the `Article` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Article" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "creator" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "link" TEXT NOT NULL,
    "pubDate" DATETIME NOT NULL,
    "content" TEXT NOT NULL,
    "approved" BOOLEAN NOT NULL
);
INSERT INTO "new_Article" ("content", "creator", "id", "link", "pubDate", "title") SELECT "content", "creator", "id", "link", "pubDate", "title" FROM "Article";
DROP TABLE "Article";
ALTER TABLE "new_Article" RENAME TO "Article";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
