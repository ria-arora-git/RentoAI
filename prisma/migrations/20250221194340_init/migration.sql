/*
  Warnings:

  - The primary key for the `properties` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `sr_no` on the `properties` table. All the data in the column will be lost.
  - Made the column `spid` on table `properties` required. This step will fail if there are existing NULL values in that column.
  - Made the column `prop_id` on table `properties` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "properties" DROP CONSTRAINT "properties_pkey",
DROP COLUMN "sr_no",
ALTER COLUMN "spid" SET NOT NULL,
ALTER COLUMN "prop_id" SET NOT NULL,
ADD CONSTRAINT "properties_pkey" PRIMARY KEY ("prop_id");
