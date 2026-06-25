export default function Profile() {
    const user = {
        name: "Jihane Erraji",
        email: "jihane@email.com",
        joined: "June 2026",
        savedJobs: 5
    }

    return (
        <div className="profile-container">
            <div className="shape shape-1"></div>
            <div className="shape shape-2"></div>
            <div className="shape shape-3"></div>

            <div className="profile-card">
                <div className="profile-avatar">
                    <span className="avatar-letter">{user.name.charAt(0)}</span>
                </div>
                <h2 className="profile-name">{user.name}</h2>
                <p className="profile-email">{user.email}</p>
                <p className="profile-joined">Joined {user.joined}</p>
                <div className="profile-stats">
                    <div className="stat">
                        <span className="stat-number">{user.savedJobs}</span>
                        <span className="stat-label">Saved Jobs</span>
                    </div>
                </div>
                <button className="profile-btn">Edit Profile</button>
            </div>
        </div>
    )
}