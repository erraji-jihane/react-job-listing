import './Navbar.css'
import { Link, useLocation } from "react-router-dom"

function Navbar ({search,setSearch}){
    const location = useLocation();
    const links = [
        {name: "Home", path: "/"},
        {name: "Jobs", path: "/jobs"},
        {name:"Companies", path: "/companies"},
        {name:"Saved Jobs", path: "/saved"}
    ]

    return(
        <nav className = "navbar">

            <div className="nav_left">
                <div className = "navbar_logo">
                    Job Listing
                </div>
            </div>
            
            <div className="nav_center">  
                {links.map ((link) => (
                    <Link 
                        className={`nav_link ${location.pathname === link.path ? 'active' : ''}`}
                        key={link.name} 
                        to={link.path}
                    >
                        
                     {link.name} 

                    </Link>
                ))}

            </div>
            <div className="nav_right">
                <div className="searchBar">
                    <input 
                        type="text"
                        placeholder="Search a job ..."
                        value = {search}
                        onChange={(e)=>setSearch(e.target.value)}
                    />
                </div>

                <div className="auth">
                    <button className="login">login</button>
                    <button className="signup">Sign Up</button>
                 </div>
            </div>
            
        </nav>
    )
}

export default Navbar