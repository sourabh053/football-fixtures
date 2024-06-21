import axios from "axios";

export default async function deleteTeam(teamId) {
  try {
    const response = await axios.delete(
      `https://football-fixtures-production.up.railway.app/api/v1/teams/deleteTeam/${teamId}`
    );
    return response.data;
  } catch (e) {
    console.log(e);
  }
}
