import './Navbar.css'
import { Link, useLocation } from "react-router-dom"
import { useState, useEffect } from "react" 

function Navbar (){
    const location = useLocation();
    const [prevScrollPos, setPrevScrollPos] = useState(0);
    const [visible, setVisible] = useState(true);

    useEffect(() => {
            const handleScroll = () => {
            const currentScrollPos = window.scrollY;
            const isVisible = prevScrollPos > currentScrollPos || currentScrollPos < 10;
            
            setVisible(isVisible);
            setPrevScrollPos(currentScrollPos);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [prevScrollPos]);

    
    
    const links = [
        {name: "Home", path: "/"},
        {name: "Jobs", path: "/jobs"},
        {name:"Companies", path: "/companies"},
        {name:"Saved Jobs", path: "/saved"},
        {name: "Profile", path: "/profile"}
    ]

    return(
        <nav className={`navbar ${visible ? 'visible' : 'hidden'}`}>

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
                
                <div className="auth">
                    <button className="login">login</button>
                    <button className="signup">Sign Up</button>
                 </div>
            </div>
            
        </nav>
    )
}

export default Navbar