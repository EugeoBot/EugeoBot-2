const { PrismaClient } = require("@prisma/client");
const db = new PrismaClient();
let availableDoctors = null;
async function fetchData() {
  return (availableDoctors = await db.doctor.findMany());
}

module.exports = {
  fetchData,
};
