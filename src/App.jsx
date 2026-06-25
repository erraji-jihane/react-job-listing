import Navbar from "./components/Navbar/Navbar"
import { Route, Routes } from "react-router-dom";
import { useState } from "react";



import Home from "./pages/Home/Home";
import Jobs from "./pages/Jobs/Jobs";
import Companies from "./pages/Companies/Companies";
import Saved from "./pages/Saved/Saved";
import Profile from "./pages/Profile/Profile";
import Settings from "./pages/Settings/Settings";


function App() {
  const [search, setSearch] = useState("");
  const [savedJobs, setSavedJobs] = useState([]);
  const [message, setMessage] = useState("");

  const removeJob = (jobId)=>{
    const remainingJobs = savedJobs.filter((job)=> job.id !== jobId );
    setSavedJobs(remainingJobs);
    setMessage("Job removed!");

    setTimeout(() => setMessage(""), 2000);
  };



  return (
    <>
      <Navbar/>
      
      <Routes>
        <Route path = '/' element = {<Home />}/>
        <Route path = "/jobs" element = {<Jobs search = {search} setSearch={setSearch} savedJobs = {savedJobs} setMessage= {setMessage} setSavedJobs={setSavedJobs} removeJob={removeJob} />}/>
        <Route path = "/companies" element= {<Companies />} />
        <Route path = "/saved" element= {<Saved search = {search} setSearch={setSearch} savedJobs= {savedJobs} removeJob= {removeJob} />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/settings" element={<Settings />} />


      </Routes>

      

    </>
  );
}

export default App;