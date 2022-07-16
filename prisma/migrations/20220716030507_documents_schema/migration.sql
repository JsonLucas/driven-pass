-- CreateTable
CREATE TABLE "documents" (
    "id" SERIAL NOT NULL,
    "type" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "issueDate" TIMESTAMP(3) NOT NULL,
    "expirationDate" TIMESTAMP(3) NOT NULL,
    "number" TEXT NOT NULL,
    "institution" TEXT NOT NULL,
    "userId" INTEGER NOT NULL,

    CONSTRAINT "documents_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "documents" ADD CONSTRAINT "documents_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
