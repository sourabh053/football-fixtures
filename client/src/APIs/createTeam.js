import axios from "axios";

export default async function createTeam(formData) {
  try {
    const response = await axios.post(
      "http://localhost:8080/api/v1/teams/createTeam",
      formData
    );
    const resObj = response.data;
    if(resObj.success){
        return resObj.data[0].insertId;
    }else{
        console.log("Request failed");
    }
  } catch (e) {
    console.log(e);
  }
}
