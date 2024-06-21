import axios from "axios";

export default async function getFixturesByTeamId(teamId) {
  try {
    const response = await axios.get(
      `https://football-fixtures-production.up.railway.app/api/v1/fixtures/getFixtures/${teamId}`
    );
    if (response.status === 200) {
      const responseObj = response.data;
      if (responseObj.success) {
        return responseObj.teamFixtures;
      } else {
        console.log("request failed");
        return [];
      }
    }
  } catch (e) {
    console.log(e);
  }
}
