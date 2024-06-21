import React, { useState } from 'react'
import Box from '@mui/material/Box';
import BasicSelect from './BasicSelect';
import BasicTable from './BasicTable';

export default function TeamsUI({teams,setTeams}) {
  const [fixtures,setFixtures] = useState([]);
  return (
    <Box>
      <BasicSelect teams={teams} setFixtures={setFixtures}/>
      <BasicTable fixtures={fixtures} />
    </Box>
  )
}
