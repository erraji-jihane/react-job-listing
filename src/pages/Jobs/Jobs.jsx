import Cards from "../../components/Cards/Cards";
import './jobs.css'

export default function Jobs({ search, setSearch, savedJobs, setMessage, setSavedJobs, removeJob }) {
    return (
        <div className="jobs-container">
            <div className="jobs-header">
                <h2 className="jobs-title">Available Jobs</h2>
                
                <div className="jobs-search">
                    <input 
                        type="text"
                        placeholder="Search a job ..."
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                    />
                </div>
            </div>
 
            <Cards 
                search={search} 
                savedJobs={savedJobs} 
                setMessage={setMessage} 
                setSavedJobs={setSavedJobs} 
                removeJob={removeJob} 
            />
        </div>
    );
}