import Cards from "../components/Cards/Cards";

export default function Jobs({search,savedJobs,setMessage,setSavedJobs}) {

    return <Cards search = {search} savedJobs={savedJobs} setMessage={setMessage} setSavedJobs={setSavedJobs}/>;
}