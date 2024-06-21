const express = require("express");
const router = express.Router();
const { getAllTeams, getTeamById, createTeam, updateTeam, deleteTeam } = require("../controllers/teamsController");

//get all teams
router.get("/getAllTeams", getAllTeams);

//get student by id
router.get("/get/:id", getTeamById);

//create team
router.post("/createTeam", createTeam);

//update team
router.put("/updateTeam/:id", updateTeam);

//delete team
router.delete("/deleteTeam/:id", deleteTeam);

module.exports = router;
