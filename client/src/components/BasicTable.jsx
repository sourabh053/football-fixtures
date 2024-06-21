import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";


export default function BasicTable({ fixtures }) {
    if(fixtures.length === 0) return <h1>No Fixtures Scheduled For this Team</h1>
  return (
    <TableContainer component={Paper} sx={{mt:3}}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="left">DATE</TableCell>
            <TableCell align="left">TEAM 1</TableCell>
            <TableCell align="left" sx={{paddingLeft: "30px"}}>MATCH</TableCell>
            <TableCell align="left">TEAM 2</TableCell>
            <TableCell align="left">TIME</TableCell>
            <TableCell align="left">COMPETITION</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {fixtures.map((fixture) => (
            <TableRow
              key={fixture.fixtureId}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } , borderBottom:"1px solid rgba(224, 224, 224, 1);"}}
            >
                <TableCell align="left">
                {fixture.fixturesDate}
              </TableCell>
              <TableCell align="left">
                {fixture.name}
              </TableCell>
              <TableCell align="left" sx={{display: "flex", gap:1}}>
                <img src={fixture.logo} alt="logo" />v
                <img src={fixture.oppositionTeamCrest} alt="opposition logo" />
              </TableCell>
              <TableCell align="left">{fixture.oppositionTeamName}</TableCell>
              <TableCell align="left">{fixture.fixtureTime}</TableCell>
              <TableCell align="left">{fixture.fixCompetition}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
