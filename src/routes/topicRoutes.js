const express = require("express");
const {
  createTopic,
  editTopic,
  deleteTopic,
  getAllTopics,
  getTopicById,
} = require("../controllers/topicController");

const router = express.Router();

router.post("/", createTopic);
router.put("/:id", editTopic);
router.delete("/:id", deleteTopic);
router.get("/", getAllTopics); // Get all
router.get("/:id", getTopicById); // Get by ID

module.exports = router;
