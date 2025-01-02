const express = require("express");
const {
  createSubject,
  editSubject,
  deleteSubject,
  getAllSubjects,
  getSubjectById,
} = require("../controllers/subjectController");

const router = express.Router();

router.post("/", createSubject);
router.put("/:id", editSubject);
router.delete("/:id", deleteSubject);
router.get("/", getAllSubjects); // Get all
router.get("/:id", getSubjectById); // Get by ID

module.exports = router;
