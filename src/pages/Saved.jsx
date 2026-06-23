export default function Saved({savedJobs, removeJob}) {
    return (
        <div>
            <h2>Saved Jobs ({savedJobs.length})</h2>
            {savedJobs.length === 0 ? (
                <p>No saved jobs yet</p>
            ) : (
                <div>
                    {savedJobs.map((job) => (
                    <div key = {job.id}>
                        <h3>{job.title}</h3>
                        <p>{job.company}</p>
                        <p>{job.location}</p>
                        <button onClick={() => removeJob(job.id)}>
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