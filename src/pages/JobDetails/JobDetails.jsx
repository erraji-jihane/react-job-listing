import { useParams, Link } from 'react-router-dom'
import jobsData from '../../data/jobsData.json'
import './JobDetails.css'  

export default function JobDetails(){
    const { id } = useParams()
    const job = jobsData.find(job => job.id === parseInt(id))

    if (!job) {
        return <h2>Job not found</h2>
    }

    return (        
        <div className="job-details-container">
            <div className="job-details-card">
                <Link to="/jobs" className="back-btn">← Back to Jobs</Link>
                <h1>{job.title}</h1>
                <p className="job-company">{job.company}</p>
                <p className="job-location">{job.location}</p>
                <div className="job-description">
                    <h3>Description</h3>
                    <p>This is a great opportunity to work at {job.company} as a {job.title}.</p>
                </div>
                <button className="apply-btn">Apply Now</button>
            </div>
        </div>
        )
    }   