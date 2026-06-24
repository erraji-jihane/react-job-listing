import Cards from "../../components/Cards/Cards";
import './Jobs.css'

export default function Jobs({search,setSearch,savedJobs,setMessage,setSavedJobs,removeJob}) {

    return(
        <div className="jobs-container">
   
            <h2 className="jobs-title">Available Jobs</h2>
            
            <div className="searchBar">
                <input 
                    type="text"
                    placeholder="Search a job ..."
                    value = {search}
                    onChange={(e)=>setSearch(e.target.value)}/>
            </div>
 
            <Cards 
                search = {search} 
                savedJobs={savedJobs} 
                setMessage={setMessage} 
                setSavedJobs={setSavedJobs} 
                removeJob={removeJob}/>



        </div>
        
    );
}