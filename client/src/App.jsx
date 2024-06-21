import { Routes, Route } from "react-router-dom";

import getAllTeams from "./APIs/getAllTeams";

import "./App.css";
import TeamsCRUD from "./components/TeamsCRUD";
import TeamsUI from "./components/TeamsUI";
import { useEffect, useState } from "react";


function App() {
  const [teams, setTeams] = useState([]);
  
  useEffect(() => {
    async function getData() {
      const data = await getAllTeams();
      setTeams(data);
    }
    getData();
  }, []);
  return (
    <>
     <Routes>
          <Route path="/" element={<TeamsUI teams={teams} setTeams={setTeams}/>} />
          <Route path="admin" element={<TeamsCRUD teams={teams} setTeams={setTeams}/>} />
          <Route path="*" element={<h1>No Page found!!!</h1>} />
      </Routes>
    
    </>
  )
}

export default App;
