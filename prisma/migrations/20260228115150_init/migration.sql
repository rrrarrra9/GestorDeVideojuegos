-- CreateEnum
CREATE TYPE "Format" AS ENUM ('DIGITAL', 'PHYSICAL', 'BOTH', 'WISHLIST');

-- CreateTable
CREATE TABLE "Game" (
    "id" SERIAL NOT NULL,
    "rawgId" INTEGER NOT NULL,
    "name" TEXT NOT NULL,
    "released" TIMESTAMP(3) NOT NULL,
    "rating" DOUBLE PRECISION,
    "backgroundImage" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "platforms" TEXT[],
    "genres" TEXT[],
    "played" BOOLEAN NOT NULL DEFAULT false,
    "format" "Format" NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Game_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Game_rawgId_key" ON "Game"("rawgId");
