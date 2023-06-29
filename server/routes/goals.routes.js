const express = require("express");
const router = express.Router();

const {
  getGoals,
  createGoal,
  deleteGoal,
  updateGoal,
} = require("../controllers/goals.controller");

const { protect } = require("../middleware/auth.middleware");

router.route("/").get(protect, getGoals).post(protect, createGoal);

router.route("/:id").put(protect, updateGoal).delete(protect, deleteGoal);

module.exports = router;
