import Card from '../Card/Card'
import './Cards.css'

function Cards({search,savedJobs,setMessage, setSavedJobs}){

    const jobs = [
        { id: 1, title: "Frontend Developer", company: "Silent Believers", location: "Morocco" },
        { id: 2, title: "AI Engineer", company: "Amazon", location: "USA" },
        { id: 3, title: "Backend Developer", company: "Google", location: "USA" },
        { id: 4, title: "Full Stack Developer", company: "Microsoft", location: "Canada" },
        { id: 5, title: "Data Scientist", company: "Meta", location: "USA" },
        { id: 6, title: "Machine Learning Engineer", company: "OpenAI", location: "USA" },
        { id: 7, title: "UI/UX Designer", company: "Figma", location: "Remote" },
        { id: 8, title: "DevOps Engineer", company: "Netflix", location: "USA" },
        { id: 9, title: "Mobile Developer", company: "Apple", location: "USA" },
        { id: 10, title: "Software Engineer", company: "Tesla", location: "USA" },
        { id: 11, title: "Frontend Intern", company: "Startup Hub", location: "Morocco" },
        { id: 12, title: "Backend Intern", company: "IBM", location: "Germany" },
        { id: 13, title: "Data Analyst", company: "Spotify", location: "Sweden" },
        { id: 14, title: "Cloud Engineer", company: "AWS", location: "USA" },
        { id: 15, title: "Cybersecurity Engineer", company: "Cisco", location: "USA" },
        { id: 16, title: "AI Researcher", company: "DeepMind", location: "UK" },
        { id: 17, title: "Product Manager", company: "Airbnb", location: "USA" },
        { id: 18, title: "QA Engineer", company: "Uber", location: "USA" },
        { id: 19, title: "Game Developer", company: "Epic Games", location: "USA" },
        { id: 20, title: "Systems Engineer", company: "Intel", location: "USA" },
        { id: 21, title: "Frontend Intern", company: "Startup Hub", location: "Morocco" },
        { id: 22, title: "Backend Intern", company: "IBM", location: "Germany" },
        { id: 23, title: "Data Analyst", company: "Spotify", location: "Sweden" },
        { id: 24, title: "Cloud Engineer", company: "AWS", location: "USA" },
        { id: 25, title: "Cybersecurity Engineer", company: "Cisco", location: "USA" },
        { id: 26, title: "AI Researcher", company: "DeepMind", location: "UK" },
        { id: 27, title: "Product Manager", company: "Airbnb", location: "USA" },
        { id: 28, title: "QA Engineer", company: "Uber", location: "USA" },
        { id: 29, title: "Game Developer", company: "Epic Games", location: "USA" },
        { id: 30, title: "Systems Engineer", company: "Intel", location: "USA" },
        { id: 31, title: "Frontend Intern", company: "Startup Hub", location: "Morocco" },
        { id: 32, title: "Backend Intern", company: "IBM", location: "Germany" },
        { id: 33, title: "Data Analyst", company: "Spotify", location: "Sweden" },
        { id: 34, title: "Cloud Engineer", company: "AWS", location: "USA" },
        { id: 35, title: "Cybersecurity Engineer", company: "Cisco", location: "USA" },
        { id: 36, title: "AI Researcher", company: "DeepMind", location: "UK" },
        { id: 37, title: "Product Manager", company: "Airbnb", location: "USA" },
        { id: 38, title: "QA Engineer", company: "Uber", location: "USA" },
        { id: 39, title: "Game Developer", company: "Epic Games", location: "USA" },
        { id: 40, title: "Systems Engineer", company: "Intel", location: "USA" }
    ];
    const filteredJob = jobs.filter((job) => 
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
            
            />
        ))}
        </div>
    
    );
}
export default Cards;