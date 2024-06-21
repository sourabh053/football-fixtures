const db = require("../config/db");

//get all teams
const getAllTeams = async (req, res) => {
  try {
    const data = await db.query("SELECT * from all_teams");
    if (!data) {
      return res.status(404).send({
        success: false,
        message: "No records found",
      });
    }
    res.status(200).send({
      success: true,
      message: "All teams records",
      totalTeams: data[0].length,
      data: data[0],
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error in get all teams API",
      error,
    });
  }
};

//get team by id
const getTeamById = async (req, res) => {
  try {
    const teamID = req.params.id;
    if (!teamID) {
      return res.status(404).send({
        success: false,
        message: "Invalid or Provide a valid team id",
      });
    }
    const data = await db.query(`SELECT * from all_teams WHERE id = ?`, [
      teamID,
    ]);
    if (!data) {
      return res.status(404).send({
        success: false,
        message: "No records found",
      });
    }
    res.status(200).send({
      success: true,
      message: "team details",
      teamDetails: data[0],
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error in get team by id API",
      error,
    });
  }
};

//create team
const createTeam = async (req, res) => {
  try {
    const { name, description, competition, country,logo } = req.body;
    // console.log(req.body);
    if (!name || !description || !competition || !country || !logo) {
      res.status(500).send({
        success: false,
        message: "please provide all fields",
      });
    }
    const data = await db.query(
      `INSERT INTO all_teams ( name, description, competition, country, logo) VALUES ( ? , ? , ? , ?, ?)`,
      [name, description, competition, country, logo]
    );
    if (!data) {
      return res.status(500).send({
        success: false,
        message: "Error in INSERT QUERY",
      });
    }
    res.status(201).send({
      success: true,
      message: "new team created",
      data
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error in create team API",
      error,
    });
  }
};

const updateTeam = async (req, res) => {
  try {
    const teamID = req.params.id;
    const { name, description, competition, country,logo } = req.body;
    if (!teamID) {
      return res.status(404).send({
        success: false,
        message: "Invalid or Provide a valid team id",
      });
    }
    //add data validation
    const data = await db.query(
      "UPDATE all_teams SET name = ? , description = ? , competition = ?, country = ?, logo= ? WHERE id = ?",
      [name, description, competition, country,logo, teamID]
    );
    if (!data) {
      return res.status(500).send({
        success: false,
        message: "Error in UPDATE QUERY",
      });
    }
    res.status(200).send({
      success: true,
      message: "team details updated",
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error in update team API",
      error,
    });
  }
};

const deleteTeam = async (req, res) => {
  try {
    const teamID = req.params.id;
    if (!teamID) {
      return res.status(404).send({
        success: false,
        message: "Invalid or Provide a valid team id",
      });
    }
    const data = db.query("DELETE FROM all_teams WHERE id = ?", [teamID]);
    if (!data) {
      return res.status(500).send({
        success: false,
        message: "Error in DELETE QUERY",
      });
    }
    res.status(200).send({
      success: true,
      message: "team deleted successfully",
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error in delete team API",
      error,
    });
  }
};
module.exports = {
  getAllTeams,
  getTeamById,
  createTeam,
  updateTeam,
  deleteTeam,
};
