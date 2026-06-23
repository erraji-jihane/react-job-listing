import './Card.css'

function Card ({job,savedJobs,setMessage,setSavedJobs}){
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
        
        <div className="card"> 
            <h2>{job.title}</h2>
            <p>{job.company}</p>
            <p>{job.location}</p>
        
        <button 
            onClick={saveJob}
            disabled = {isSaved}
        > 
            {isSaved? 'Saved': 'Save Job'}
        </button>

        </div>
        

    );
}
export default Card;