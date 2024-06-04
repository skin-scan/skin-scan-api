/*
  Warnings:

  - You are about to drop the column `diagnosis` on the `Detection` table. All the data in the column will be lost.
  - You are about to drop the column `name` on the `Detection` table. All the data in the column will be lost.
  - Added the required column `title` to the `Detection` table without a default value. This is not possible if the table is not empty.
  - Made the column `userId` on table `Detection` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE "Detection" DROP CONSTRAINT "Detection_userId_fkey";

-- AlterTable
ALTER TABLE "Detection" DROP COLUMN "diagnosis",
DROP COLUMN "name",
ADD COLUMN     "commonName" TEXT,
ADD COLUMN     "medicalName" TEXT,
ADD COLUMN     "title" TEXT NOT NULL,
ALTER COLUMN "userId" SET NOT NULL;

-- AddForeignKey
ALTER TABLE "Detection" ADD CONSTRAINT "Detection_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
