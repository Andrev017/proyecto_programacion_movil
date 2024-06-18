-- CreateTable
CREATE TABLE "Registro" (
    "id_usuario" SERIAL NOT NULL,
    "nom_usuaario" TEXT NOT NULL,
    "apell_usuario" TEXT NOT NULL,
    "fecha_usuario" TIMESTAMP(3) NOT NULL,
    "contra_usuario" TEXT NOT NULL,

    CONSTRAINT "Registro_pkey" PRIMARY KEY ("id_usuario")
);

-- CreateTable
CREATE TABLE "Crear_evento" (
    "id_evento" SERIAL NOT NULL,
    "nom_evento" TEXT NOT NULL,
    "fecha_evento" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Crear_evento_pkey" PRIMARY KEY ("id_evento")
);

-- CreateTable
CREATE TABLE "Registro_regalo" (
    "id_regalo" SERIAL NOT NULL,
    "descripcion" TEXT NOT NULL,
    "precio" DOUBLE PRECISION NOT NULL,
    "me_gusta" BOOLEAN NOT NULL,
    "relacionId" INTEGER NOT NULL,

    CONSTRAINT "Registro_regalo_pkey" PRIMARY KEY ("id_regalo")
);

-- AddForeignKey
ALTER TABLE "Registro_regalo" ADD CONSTRAINT "Registro_regalo_relacionId_fkey" FOREIGN KEY ("relacionId") REFERENCES "Crear_evento"("id_evento") ON DELETE RESTRICT ON UPDATE CASCADE;
