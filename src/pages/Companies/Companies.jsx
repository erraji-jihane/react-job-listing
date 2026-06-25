import jobsData from '../../data/jobsData.json'
export default function Companies() {
    const companies = []
    jobsData.forEach((job)=>{
        //cheking if the company is already in the comapnies array
        const existing = companies.find((c)=>job.company===c.name);
        if (existing){
            existing.jobs +=1;
        } else{
            companies.push({
                name: job.company,
                location: job.location,
                job: 1
            })
        }

    })
    return(
        <div className= "companies-container">
            <h2 className="companies-title">Companies ({companies.length})</h2>
            <div className="companies-grid">
                 {companies.map((company, index) => (
                    <div key={index} className="company-card">
                        <h3>{company.name}</h3>
                        <p className="company-location">{company.location}</p>
                        <span className="company-jobs">{company.jobs} jobs</span>
                    </div>
                 ))}
            </div>

        </div>
    );
}