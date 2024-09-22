const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

const demoData = [
  {
    productId: "1",
    userId: "a856c6c3-0c57-499c-9884-f0c2f62f980b",
    votes: 3,
    mainImage: "zbt2.png",
  },
  {
    productId: "1",
    userId: "5cd9108c-327e-4cca-9767-f7638f877688",
    votes: 8,
    mainImage: "zbt3.png",
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
