const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

async function voteForParticipant(req, res) {
  if (req.method === "POST") {
    const { participantId } = req.body;

    try {
      const updatedParticipant = await prisma.participant.updateMany({
        where: { id: participantId },
        data: { votes: { increment: 1 } },
      });

      return res.status(200).json(updatedParticipant);
    } catch (err) {
      return res.status(500).json(err);
    }
  } else {
    res.setHeader("Allow", ["POST"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}

async function getParticipantsByProductId(req, res) {
  if (req.method === "GET") {
    const { productId } = req.query;

    try {
      const participants = await prisma.participant.findMany({
        where: { productId },
        include: {
          user: true, // Assuming there's a relation with the User model
          product: true, // To include product details if needed
        },
      });

      return res.status(200).json(participants);
    } catch (error) {
      return res.status(500).json({ error: "Error fetching participants" });
    }
  } else {
    res.setHeader("Allow", ["GET"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}

module.exports = {
  voteForParticipant,
  getParticipantsByProductId,
};
