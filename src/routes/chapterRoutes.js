const express = require("express");
const {
  createChapter,
  editChapter,
  deleteChapter,
  getAllChapters,
  getChapterById,
} = require("../controllers/chapterController");

const router = express.Router();

router.post("/", createChapter);
router.put("/:id", editChapter);
router.delete("/:id", deleteChapter);
router.get("/", getAllChapters); // Get all
router.get("/:id", getChapterById); // Get by ID

module.exports = router;
