import './Card.css'
import { Link } from 'react-router-dom'

function Card ({job,savedJobs,setMessage,setSavedJobs,removeJob}){
    const isSaved = savedJobs.some((saved) => saved.id === job.id)

    const saveJob = () => { 
    if (isSaved) {
        setMessage("Already Saved!")
    } else{
        const newSavedJobs = [...savedJobs, job]
        setSavedJobs(newSavedJobs)
        setMessage("Job Saved!")

    setTimeout(()=>setMessage(""),2000);
  
    }
    };

    return (
        <Link to={`/job/${job.id}`} className="card-link">
            
            <div className="card"> 
                <h2>{job.title}</h2>
                <p className='company'>{job.company}</p>
                <p className='location'>{job.location}</p>
            
                {isSaved ? (
                    <button 
                        className="remove-btn"
                        onClick={(e) =>{
                            e.preventDefault()
                            removeJob(job.id)
                        }}
                    >
                        Remove
                    </button>
                ) : (
                    <button 
                        className="save-btn"
                        onClick={(e) => {
                            e.preventDefault()
                            saveJob()
                        }}
                    >
                        Save Job
                    </button>
                )}

            </div>
            
    </Link>
    );
}
export default Card;