import Cards from "./components/Cards/Cards";
import Navbar from "./components/Navbar/Navbar"
import { Route, Routes } from "react-router-dom";
import { useState } from "react";


import Home from "./pages/Home";
import Jobs from "./pages/Jobs";
import Companies from "./pages/Companies";
import Saved from "./pages/Saved";

function App() {
  const [search, setSearch] = useState("");

  return (
    <>
      <Navbar search={search} setSearch = {setSearch} />
      <Routes>
        <Route path = '/' element = {<Home />}/>
        <Route path="/jobs" element = {<Jobs search = {search} />}/>
        <Route path = "/companies" element= {<Companies />} />
        <Route path = "/saved" element= {<Saved />} />
      </Routes>

    </>
  );
}

export default App;