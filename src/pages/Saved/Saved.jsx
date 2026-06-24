import './Saved.css'
import { useNavigate } from 'react-router-dom';

export default function Saved({ savedJobs, removeJob }) {
    const navigate = useNavigate()
    
    return (
        <div className="saved-container">
            
            <div className="shape shape-1"></div>
            <div className="shape shape-2"></div>
            <div className="shape shape-3"></div>
            
            
            {savedJobs.length > 0 && (
                <h2 className="saved-title">Saved Jobs ({savedJobs.length})</h2>
            )}
            
            {savedJobs.length === 0 ? (
                <div className="saved-empty">
                    <p>No saved jobs yet</p>
                    <button 
                        className="saved-empty-btn"
                        onClick={() => navigate('/jobs')}
                    >
                        Browse Jobs
                    </button>
                </div>
            ) : (
                <div className="saved-grid">
                    {savedJobs.map((job) => (
                        <div key={job.id} className="saved-card">
                            <h3>{job.title}</h3>
                            <p className="company">{job.company}</p>
                            <p className="location">{job.location}</p>
                            <button 
                                className="remove-btn" 
                                onClick={() => removeJob(job.id)}
                            >
                                Remove
                            </button>
                        </div>
                    ))}
                </div>
            )}
        </div>         
    );
}