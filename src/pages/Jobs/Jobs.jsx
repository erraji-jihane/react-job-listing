import Cards from "../../components/Cards/Cards";
import './Jobs.css'

export default function Jobs({search,savedJobs,setMessage,setSavedJobs,removeJob}) {

    return(
        <div className="jobs-container">
   
            <h2 className="jobs-title">Available Jobs</h2>
 
            <Cards 
                search = {search} 
                savedJobs={savedJobs} 
                setMessage={setMessage} 
                setSavedJobs={setSavedJobs} 
                removeJob={removeJob}/>

        </div>
    );
}