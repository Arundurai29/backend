const express = require("express");
const {
  getAllUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
} = require("../controllers/userController");
const { verifyAdmin } = require("../middlewares/authMiddleware");

const router = express.Router();

// Routes
router.get("/", verifyAdmin, getAllUsers); // Admin-only access
router.get("/:id", verifyAdmin, getUserById); // Admin-only access
router.post("/", verifyAdmin, createUser); // Admin-only access
router.put("/:id", verifyAdmin, updateUser); // Admin-only access
router.delete("/:id", verifyAdmin, deleteUser); // Admin-only access

module.exports = router;
