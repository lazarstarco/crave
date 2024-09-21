const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

const demoData = [
  {
    productId: "1",
    userId: "a856c6c3-0c57-499c-9884-f0c2f62f980b",
    votes: 3,
  },
];

async function insertDemoData() {
  for (const datum of demoData) {
    await prisma.participant.create({
      data: datum,
    });
  }
  console.log("Demo datum inserted successfully!");
}

insertDemoData()
  .catch((error) => {
    console.error(error);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
