import { Link } from 'react-router-dom'
import { FaUser, FaBriefcase, FaCog, FaSignOutAlt } from 'react-icons/fa'
import './ProfileDropdown.css'

export default function ProfileDropdown({ isOpen, onClose }) {
    if (!isOpen) return null

    const user = {
        name: "Jihane Erraji",
        email: "j.erraji@aui.ma",
        savedJobs: 5
    }

    return (
        <>
            <div className="dropdown-backdrop" onClick={onClose}></div>
            
            <div className="profile-dropdown">
                <div className="dropdown-header">
                    <div className="dropdown-avatar">
                        <span>{user.name.charAt(0)}</span>
                    </div>
                    <div>
                        <p className="dropdown-name">{user.name}</p>
                        <p className="dropdown-email">{user.email}</p>
                    </div>
                </div>

                <hr className="dropdown-divider" />

                <div className="dropdown-item">
                    <FaUser size={16} />
                    <Link to="/profile" onClick={onClose}>My Profile</Link>
                </div>
                <div className="dropdown-item">
                    <FaBriefcase size={16} />
                    <Link to="/saved" onClick={onClose}>Saved Jobs </Link>
                </div>
                <div className="dropdown-item">
                    <FaCog size={16} />
                    <Link to="/settings" onClick={onClose}>Settings</Link>
                </div>

                <hr className="dropdown-divider" />

                <div className="dropdown-item logout">
                    <FaSignOutAlt size={16} />
                    <span>Logout</span>
                </div>
            </div>
        </>
    )
}