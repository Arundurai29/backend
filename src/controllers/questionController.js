const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

// Get All Questions
const getAllQuestions = async (req, res) => {
  try {
    const questions = await prisma.question.findMany({
      
    });
    res.json(questions);
  } catch (error) {
    res.status(500).json({ message: "Error fetching questions", error });
  }
};

// Get Questions by Topic
const getQuestionsByTopic = async (req, res) => {
  const { topicId } = req.params;
  try {
    const questions = await prisma.question.findMany({
      where: { topicId: parseInt(topicId) },
     
    });
    res.json(questions);
  } catch (error) {
    res.status(500).json({ message: "Error fetching questions by topic" });
  }
};

// Get Questions by Subject
const getQuestionsBySubject = async (req, res) => {
  const { subjectId } = req.params;
  try {
    const questions = await prisma.question.findMany({
      where: { subjectId: parseInt(subjectId) },
     
    });
    res.json(questions);
  } catch (error) {
    res.status(500).json({ message: "Error fetching questions by subject" });
  }
};

// Get Questions by Chapter
const getQuestionsByChapter = async (req, res) => {
  const { chapterId } = req.params;
  try {
    const questions = await prisma.question.findMany({
      where: { chapterId: parseInt(chapterId) },
      
    });
    res.json(questions);
  } catch (error) {
    res.status(500).json({ message: "Error fetching questions by chapter" });
  }
};

// Get Questions by Question Type
const getQuestionsByQuestionType = async (req, res) => {
  const { questionTypeId } = req.params;
  try {
    const questions = await prisma.question.findMany({
      where: { questionTypeId: parseInt(questionTypeId) },
      
    });
    res.json(questions);
  } catch (error) {
    res.status(500).json({ message: "Error fetching questions by question type" });
  }
};

// Add a Question
const addQuestion = async (req, res) => {
  const {
    questionTypeId,
    subjectId,
    chapterId,
    topicId,
    questionText,
    optionA,
    optionB,
    optionC,
    optionD,
    correctOption,
    hint,
  } = req.body;

  try {
    const question = await prisma.question.create({
      data: {
        questionTypeId,
        subjectId,
        chapterId,
        topicId,
        questionText,
        optionA,
        optionB,
        optionC,
        optionD,
        correctOption,
        hint,
      },
    });
    res.status(201).json(question);
  } catch (error) {
    res.status(500).json({ message: "Error adding question" });
  }
};

// Add Multiple Questions
const createQuestions = async (req, res) => {
  const { questions, subjectId, chapterId, topicId } = req.body;

  try {
    await prisma.question.createMany({
      data: questions.map((q) => ({
        subjectId,
        chapterId,
        topicId,
        questionTypeId: q.questionTypeId,
        questionText: q.questionText,
        optionA: q.optionA,
        optionB: q.optionB,
        optionC: q.optionC,
        optionD: q.optionD,
        correctOption: q.correctOption,
        hint: q.hint,
      })),
      skipDuplicates: true,
    });

    res.status(201).json({ message: "Questions added successfully" });
  } catch (error) {
    res.status(500).json({ message: "Failed to import questions", error });
  }
};

module.exports = {
  getAllQuestions,
  getQuestionsByTopic,
  getQuestionsBySubject,
  getQuestionsByChapter,
  getQuestionsByQuestionType,
  addQuestion,
  createQuestions,
};
