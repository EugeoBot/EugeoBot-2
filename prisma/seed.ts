import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function seed() {
  await Promise.all(
    getDoctors().map((doctor) => {
      return prisma.doctor.create({
        data: {
          name: doctor.name,
          specialization: doctor.specialization,
        },
      });
    })
  );
}

seed();

function getDoctors() {
  return [
    {
      name: "John Adam",
      specialization: "Allergy and immunology",
    },
    {
      name: "Christina Eve",
      specialization: "Dermatology",
    },
    {
      name: "Jolie Nice",
      specialization: "Neurology",
    },
    {
      name: "Anna De Armast",
      specialization: "Ophthalmology",
    },
    {
      name: "Andre Boston",
      specialization: "Emergency medicine",
    },
  ];
}
export {};
