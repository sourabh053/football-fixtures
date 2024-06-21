import { useState } from "react";

import createTeam from "../APIs/createTeam";
import deleteTeam from "../APIs/deleteTeam";

export default function TeamsCRUD({teams,setTeams}) {
   
    const [formData, setFormData] = useState({
      name: "",
      description: "",
      competition: "",
      country: "",
      logo: ""
    });
    async function handleSubmit(e) {
      e.preventDefault();
      const newId = await createTeam(formData);
      setTeams((prev) => [...prev, { ...formData, id: newId }]);
    }
    function handleChange(e) {
      setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    }
    async function handleDelete(teamId) {
      const data = await deleteTeam(teamId);
      setTeams((prev) => prev.filter((team) => team.id !== teamId));
    }
   
  
    return (
      <>
        <h1>All teams</h1>
        <ul>
          {teams.map((team) => {
            return (
              <li key={team.id}>
                <img src={team.logo} alt="team's crest" />
                <p>
                  {team.name} from {team.country} playing in {team.competition}
                </p>
                <button onClick={() => handleDelete(team.id)}>Delete</button>
              </li>
            );
          })}
        </ul>
        <form onSubmit={(e) => handleSubmit(e)}>
          <h3>Add new team</h3>
          <label htmlFor="name">Name of the team</label>
          <input
            type="text"
            name="name"
            required
            value={formData.name}
            onChange={(e) => handleChange(e)}
          />
          <label htmlFor="description">Description of the team</label>
          <input
            type="text"
            name="description"
            required
            value={formData.description}
            onChange={(e) => handleChange(e)}
          />
          <label htmlFor="competition">competition which team belongs to</label>
          <input
            type="text"
            name="competition"
            required
            value={formData.competition}
            onChange={(e) => handleChange(e)}
          />
          <label htmlFor="country">Country of the team</label>
          <input
            type="text"
            name="country"
            required
            value={formData.country}
            onChange={(e) => handleChange(e)}
          />
           <label htmlFor="logo">Crest of the team(link from espn)</label>
          <input
            type="text"
            name="logo"
            required
            value={formData.logo}
            onChange={(e) => handleChange(e)}
          />
          <input type="submit" value="Add Team" />
        </form>
      </>
    );
}
