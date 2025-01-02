const express = require("express");
const {
  getAllQuestions,
  getQuestionsByTopic,
  getQuestionsBySubject,
  getQuestionsByChapter,
  getQuestionsByQuestionType,
  addQuestion,
  createQuestions,
} = require("../controllers/questionController");
const { authenticateUser, authorizeRole } = require("../middlewares/authMiddleware");

const router = express.Router();

router.get("/", authenticateUser, getAllQuestions);
router.get("/topic/:topicId", authenticateUser, getQuestionsByTopic);
router.get("/subject/:subjectId", authenticateUser, getQuestionsBySubject);
router.get("/chapter/:chapterId", authenticateUser, getQuestionsByChapter);
router.get("/questiontype/:questionTypeId", authenticateUser, getQuestionsByQuestionType);
router.post("/", authenticateUser, authorizeRole(["admin"]), addQuestion);
router.post("/many", authenticateUser, authorizeRole(["admin"]), createQuestions);
module.exports = router;
