const express = require("express");
const router = express.Router();
const {
  voteForParticipant,
  getParticipantsByProductId,
} = require("../controllers/participants");

router.route("/").post(voteForParticipant);

router.route("/").get(getParticipantsByProductId);

module.exports = router;
