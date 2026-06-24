import './Saved.css'
import { useNavigate } from 'react-router-dom';

export default function Saved({ search, setSearch, savedJobs, removeJob }) {
    const navigate = useNavigate()

    const filteredSavedJobs = savedJobs.filter((job) =>
        job.title.toLowerCase().includes(search.toLowerCase()) ||
        job.company.toLowerCase().includes(search.toLowerCase())
    );
    
    return (
        <div className="saved-container">
            <div className="shape shape-1"></div>
            <div className="shape shape-2"></div>
            <div className="shape shape-3"></div>

            {/* Only show search bar if there are saved jobs */}
            {savedJobs.length > 0 && (
                <div className="saved-header">
                    <h2 className="saved-title">Saved Jobs ({filteredSavedJobs.length})</h2>
                    <div className="saved-search">
                        <input 
                            type="text"
                            placeholder="Search saved jobs ..."
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                        />
                    </div>
                </div>
            )}
            
            {filteredSavedJobs.length === 0 ? (
                <div className="saved-empty">
                    <p>{savedJobs.length === 0 ? 'No saved jobs yet' : 'No saved jobs found'}</p>
                    <button 
                        className="saved-empty-btn"
                        onClick={() => navigate('/jobs')}
                    >
                        Browse Jobs
                    </button>
                </div>
            ) : (
                <div className="saved-grid">
                    {filteredSavedJobs.map((job) => (
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