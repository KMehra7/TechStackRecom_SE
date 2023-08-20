const express = require("express");

const {
  getActivities,
  addActivity,
} = require("../controllers/activity.controller");

const router = express.Router();

/* Creating a route for the get request. */
router.get("/activities", getActivities);
/* Creating a route for the post request. */
router.post("/activity", addActivity);

module.exports = router;