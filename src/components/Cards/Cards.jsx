import Card from '../Card/Card'
import './Cards.css'

function Cards({search}){

    const jobs = [
        { title: "Frontend Developer", company: "Silent Believers", location: "Morocco" },
        { title: "AI Engineer", company: "Amazon", location: "USA" },
        { title: "Backend Developer", company: "Google", location: "USA" },
        { title: "Full Stack Developer", company: "Microsoft", location: "Canada" },
        { title: "Data Scientist", company: "Meta", location: "USA" },
        { title: "Machine Learning Engineer", company: "OpenAI", location: "USA" },
        { title: "UI/UX Designer", company: "Figma", location: "Remote" },
        { title: "DevOps Engineer", company: "Netflix", location: "USA" },
        { title: "Mobile Developer", company: "Apple", location: "USA" },
        { title: "Software Engineer", company: "Tesla", location: "USA" },

        { title: "Frontend Intern", company: "Startup Hub", location: "Morocco" },
        { title: "Backend Intern", company: "IBM", location: "Germany" },
        { title: "Data Analyst", company: "Spotify", location: "Sweden" },
        { title: "Cloud Engineer", company: "AWS", location: "USA" },
        { title: "Cybersecurity Engineer", company: "Cisco", location: "USA" },
        { title: "AI Researcher", company: "DeepMind", location: "UK" },
        { title: "Product Manager", company: "Airbnb", location: "USA" },
        { title: "QA Engineer", company: "Uber", location: "USA" },
        { title: "Game Developer", company: "Epic Games", location: "USA" },
        { title: "Systems Engineer", company: "Intel", location: "USA" },

        { title: "Frontend Intern", company: "Startup Hub", location: "Morocco" },
        { title: "Backend Intern", company: "IBM", location: "Germany" },
        { title: "Data Analyst", company: "Spotify", location: "Sweden" },
        { title: "Cloud Engineer", company: "AWS", location: "USA" },
        { title: "Cybersecurity Engineer", company: "Cisco", location: "USA" },
        { title: "AI Researcher", company: "DeepMind", location: "UK" },
        { title: "Product Manager", company: "Airbnb", location: "USA" },
        { title: "QA Engineer", company: "Uber", location: "USA" },
        { title: "Game Developer", company: "Epic Games", location: "USA" },
        { title: "Systems Engineer", company: "Intel", location: "USA" },

        { title: "Frontend Intern", company: "Startup Hub", location: "Morocco" },
        { title: "Backend Intern", company: "IBM", location: "Germany" },
        { title: "Data Analyst", company: "Spotify", location: "Sweden" },
        { title: "Cloud Engineer", company: "AWS", location: "USA" },
        { title: "Cybersecurity Engineer", company: "Cisco", location: "USA" },
        { title: "AI Researcher", company: "DeepMind", location: "UK" },
        { title: "Product Manager", company: "Airbnb", location: "USA" },
        { title: "QA Engineer", company: "Uber", location: "USA" },
        { title: "Game Developer", company: "Epic Games", location: "USA" },
        { title: "Systems Engineer", company: "Intel", location: "USA" }
    ];
    const filteredJob = jobs.filter((job) => 
        job.title.toLowerCase().includes(search.toLowerCase()));
    return(
        <div className="cards-container">

        { filteredJob.map((job, index) => (
            <Card
                key = {index}
                title = {job.title}
                company = {job.company}
                location = {job.location}
            
            />
        ))}
        </div>
    
    );
}
export default Cards;