export default function Saved({savedJobs, removeJob}) {
    return (
        <div className="saved-container">
            <h2 className="saved-title">Saved Jobs ({savedJobs.length})</h2>
            {savedJobs.length === 0 ? (
                <p className="saved-empty">No saved jobs yet</p>
            ) : (
                <div className="saved-grid">
                    {savedJobs.map((job) => (
                    <div key = {job.id} className="saved-card">
                        <h3>{job.title}</h3>
                        <p className="company">{job.company}</p>
                        <p className="location">{job.location}</p>
                        <button className="remove-btn" onClick={() => removeJob(job.id)}>
                            Remove
                        </button>
                    </div>
                    ))}
                </div>
                )
            }
        </div>         
    );
}