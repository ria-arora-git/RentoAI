/*
  Warnings:

  - The primary key for the `properties` table will be changed. If it partially fails, the table could be left without primary key constraint.

*/
-- AlterTable
ALTER TABLE "properties" DROP CONSTRAINT "properties_pkey",
ADD CONSTRAINT "properties_pkey" PRIMARY KEY ("prop_id", "spid");
