/*
  Warnings:

  - You are about to drop the `blogs` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "public"."blogs";

-- CreateTable
CREATE TABLE "public"."Blogs" (
    "id" SERIAL NOT NULL,
    "title" VARCHAR(150) NOT NULL,
    "content" TEXT NOT NULL,
    "desc_short" VARCHAR(255) NOT NULL,
    "slug" VARCHAR(150) NOT NULL,
    "img" VARCHAR(30) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Blogs_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."Projects" (
    "id" SERIAL NOT NULL,
    "titule" VARCHAR(100) NOT NULL,
    "img" VARCHAR(255) NOT NULL,
    "url" VARCHAR(255) NOT NULL,
    "desc_short" VARCHAR(255) NOT NULL,

    CONSTRAINT "Projects_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."Experiences" (
    "id" SERIAL NOT NULL,
    "company" VARCHAR(100) NOT NULL,
    "desc_company" VARCHAR(255) NOT NULL,
    "rol" VARCHAR(100) NOT NULL,
    "area" VARCHAR(100) NOT NULL,
    "date_init" TIMESTAMP(3) NOT NULL,
    "date_end" TIMESTAMP(3),

    CONSTRAINT "Experiences_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."ExperiencesResponsabilities" (
    "id" SERIAL NOT NULL,
    "experience_id" INTEGER NOT NULL,
    "text" VARCHAR(255) NOT NULL,

    CONSTRAINT "ExperiencesResponsabilities_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."Skills" (
    "id" SERIAL NOT NULL,
    "text" VARCHAR(100) NOT NULL,

    CONSTRAINT "Skills_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."_BlogsToSkills" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL,

    CONSTRAINT "_BlogsToSkills_AB_pkey" PRIMARY KEY ("A","B")
);

-- CreateTable
CREATE TABLE "public"."_ProjectsToSkills" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL,

    CONSTRAINT "_ProjectsToSkills_AB_pkey" PRIMARY KEY ("A","B")
);

-- CreateTable
CREATE TABLE "public"."_ExperiencesToSkills" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL,

    CONSTRAINT "_ExperiencesToSkills_AB_pkey" PRIMARY KEY ("A","B")
);

-- CreateIndex
CREATE UNIQUE INDEX "Skills_text_key" ON "public"."Skills"("text");

-- CreateIndex
CREATE INDEX "_BlogsToSkills_B_index" ON "public"."_BlogsToSkills"("B");

-- CreateIndex
CREATE INDEX "_ProjectsToSkills_B_index" ON "public"."_ProjectsToSkills"("B");

-- CreateIndex
CREATE INDEX "_ExperiencesToSkills_B_index" ON "public"."_ExperiencesToSkills"("B");

-- AddForeignKey
ALTER TABLE "public"."ExperiencesResponsabilities" ADD CONSTRAINT "ExperiencesResponsabilities_experience_id_fkey" FOREIGN KEY ("experience_id") REFERENCES "public"."Experiences"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "public"."_BlogsToSkills" ADD CONSTRAINT "_BlogsToSkills_A_fkey" FOREIGN KEY ("A") REFERENCES "public"."Blogs"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."_BlogsToSkills" ADD CONSTRAINT "_BlogsToSkills_B_fkey" FOREIGN KEY ("B") REFERENCES "public"."Skills"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."_ProjectsToSkills" ADD CONSTRAINT "_ProjectsToSkills_A_fkey" FOREIGN KEY ("A") REFERENCES "public"."Projects"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."_ProjectsToSkills" ADD CONSTRAINT "_ProjectsToSkills_B_fkey" FOREIGN KEY ("B") REFERENCES "public"."Skills"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."_ExperiencesToSkills" ADD CONSTRAINT "_ExperiencesToSkills_A_fkey" FOREIGN KEY ("A") REFERENCES "public"."Experiences"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."_ExperiencesToSkills" ADD CONSTRAINT "_ExperiencesToSkills_B_fkey" FOREIGN KEY ("B") REFERENCES "public"."Skills"("id") ON DELETE CASCADE ON UPDATE CASCADE;
