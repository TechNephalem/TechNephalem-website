export const AboutCard = ({ icon: Icon, title, description }) => (
    <div className="about-card glass-card" data-tilt>
        <div className="card-glow"></div>
        <div className="about-icon">
            <Icon />
        </div>
        <h3>{title}</h3>
        <p>{description}</p>
    </div>
);