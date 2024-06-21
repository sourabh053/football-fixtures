import axios from "axios";

export default async function deleteTeam(teamId) {
  try {
    const response = await axios.delete(
      `http://localhost:8080/api/v1/teams/deleteTeam/${teamId}`
    );
    return response.data;
  } catch (e) {
    console.log(e);
  }
}
