const express = require("express");
const { createTest } = require("../controllers/testController");
const { authenticateUser, authorizeRole } = require("../middlewares/authMiddleware");

const router = express.Router();

router.post("/", authenticateUser, authorizeRole(["admin", "user"]), createTest);

module.exports = router;
