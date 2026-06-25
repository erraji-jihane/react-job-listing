import './Home.css'
import { Link } from 'react-router-dom'
import { FaRocket, FaBriefcase } from 'react-icons/fa'

export default function Home() {

    const companies = [...new Set(jobsData.map(job => job.company))];
    const countries = [...new Set(jobsData.map(job => job.location))];

    const totalJobs = jobsData.length;
    const totalCompanies = companies.length;
    const totalCountries = countries.length;


    return (
        <div className="home-container">
             <div className="shape shape-1"></div>
             <div className="shape shape-2"></div>
             <div className="shape shape-3"></div>
            
            <div className="home-content">
                <span className="home-badge">
                    <FaRocket size={14} style={{ marginRight: '8px' }} />
                    Your Career Starts Here
                </span>
                <h1>Find a Job You'll <span className="highlight">Actually Love</span></h1>
                <p className="home-subtitle">
                    No more endless scrolling. Browse handpicked jobs, save your favorites, 
                    and take the next step in your career.
                </p>
                <div className="home-buttons">
                    <Link to="/jobs" className="home-btn primary">
                        Start Exploring
                        <FaBriefcase size={14} style={{ marginLeft: '8px' }} />
                    </Link>
                    <Link to="/saved" className="home-btn secondary">
                        Saved Jobs
                    </Link>
                </div>
                <div className="home-stats">
                    <div className="stat-item">
                        <span className="stat-number">{totalJobs}+</span>
                        <span className="stat-label">Live Jobs</span>
                    </div>
                    <div className="stat-item">
                        <span className="stat-number">{totalCompanies}+</span>
                        <span className="stat-label">Companies</span>
                    </div>
                    <div className="stat-item">
                        <span className="stat-number">{totalCountries}+</span>
                        <span className="stat-label">Countries</span>
                    </div>
                </div>
            </div>
        </div>
    )
}