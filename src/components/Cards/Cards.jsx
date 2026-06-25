import Card from '../Card/Card'
import './Cards.css'
import jobsData from '../../data/jobsData.json'

function Cards({search,savedJobs,setMessage, setSavedJobs,removeJob}){

    const filteredJob = jobsData.filter((job) => 
        job.title.toLowerCase().includes(search.toLowerCase()));
    return(
        <div className="cards-container">

        { filteredJob.map((job, index) => (
            <Card
                key = {job.id}
                job = {job}
                savedJobs= {savedJobs}
                setMessage={setMessage}
                setSavedJobs = {setSavedJobs}
                removeJob = {removeJob}
            
            />
        ))}
        </div>
    
    );
}
export default Cards;