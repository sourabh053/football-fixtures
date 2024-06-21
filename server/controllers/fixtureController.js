const db = require("../config/db");

const getFixturesByTeamId = async (req, res) => {
  try {
    const teamID = req.params.id;
    if (!teamID) {
      return res.status(404).send({
        success: false,
        message: "Invalid or Provide a valid team id",
      });
    }
    const data = await db.query(`SELECT * FROM fixtures JOIN all_teams ON fixtures.mainTeamId = all_teams.id WHERE all_teams.id = ?`, [
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
      message: "team fixtures details",
      teamFixtures: data[0],
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error in get fixtures by team id API",
      error,
    });
  }
};

module.exports = { getFixturesByTeamId };
