const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

// Create a test
const createTest = async (req, res) => {
  const { questionId, correctAnswer, wrongAnswer, unAnswered, accuracy, totalTime, overallScore } = req.body;

  try {
    const test = await prisma.test.create({
      data: {
        questionId,
        correctAnswer,
        wrongAnswer,
        unAnswered,
        accuracy,
        totalTime,
        overallScore,
      },
    });
    res.status(201).json(test);
  } catch (error) {
    res.status(500).json({ message: "Error creating test" });
  }
};

module.exports = { createTest };
