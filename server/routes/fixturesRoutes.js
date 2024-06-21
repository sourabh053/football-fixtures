const express = require("express");
const { getFixturesByTeamId } = require("../controllers/fixtureController");
const router = express.Router();

// get team fixtures by id
router.get("/getFixtures/:id", getFixturesByTeamId);

module.exports = router;
