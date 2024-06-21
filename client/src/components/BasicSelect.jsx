import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import getFixturesByTeamId from "../APIs/getFixturesByTeamId";

export default function BasicSelect({ teams, setFixtures }) {
  const [teamName, setTeamName] = React.useState("");

  const handleChange = async (event) => {
    setTeamName(event.target.value);
    const team = teams.find((team) => team.name === event.target.value);
    const data = await getFixturesByTeamId(team.id);
    setFixtures(data);
  };

  return (
    <Box sx={{ minWidth: 120, maxWidth: 500 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Team</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={teamName}
          label="Team"
          onChange={handleChange}
        >
          {teams.map((val) => (
            <MenuItem key={val.id} value={val.name}>
              {val.name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
}
