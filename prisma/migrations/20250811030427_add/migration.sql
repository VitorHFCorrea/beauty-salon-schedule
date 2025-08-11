/*
  Warnings:

  - The `phones` column on the `Salon` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "public"."Salon" DROP COLUMN "phones",
ADD COLUMN     "phones" TEXT[];
