import Cards from "./components/Cards/Cards";
import Navbar from "./components/Navbar/Navbar"
import { Route, Routes } from "react-router-dom";


import Home from "./pages/Home";
import Jobs from "./pages/Jobs";
import Companies from "./pages/Companies";
import Saved from "./pages/Saved";

function App() {

  return (
    <>
      <Navbar />
      <Routes>
        <Route path = '/' element = {<Home />}/>
        <Route path="/jobs" element = {<Jobs />}/>
        <Route path = "/companies" element= {<Companies />} />
        <Route path = "/saved" element= {<Saved />} />
      </Routes>

    </>
  );
}

export default App;