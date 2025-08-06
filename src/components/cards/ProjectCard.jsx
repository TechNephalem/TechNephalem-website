import {
    Brain, Cloud, Blocks, Layers, Target, Eye, Users, Check, ArrowRight,
    Play, Sun, Moon, Menu, Github, ExternalLink, Quote, Star, Mail,
    Phone, MapPin, Linkedin, Twitter, Send, Loader, X, ChevronLeft,
    ChevronRight
} from 'lucide-react';
export const ProjectCard = ({ project }) => {
    return (
        <div className="project-card glass-card" data-category={project.category}>
            <div className="project-header">
                <div className="project-badge">{project.category}</div>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
            </div>
            <div className="project-body">
                <div className="project-results">
                    {Object.entries(project.results).map(([key, value]) => (
                        <div key={key} className="result-item">
                            <span className="result-label">{key}:</span>
                            <span className="result-value">{value}</span>
                        </div>
                    ))}
                </div>
                <div className="project-tech">
                    {project.technologies.map((tech, index) => (
                        <span key={index} className="tech-tag">{tech}</span>
                    ))}
                </div>
                <div className="project-links">
                    <a href={project.github} className="project-link" target="_blank" rel="noopener noreferrer">
                        <Github />
                        View Code
                    </a>
                    <a href={project.demo} className="project-link" target="_blank" rel="noopener noreferrer">
                        <ExternalLink />
                        Live Demo
                    </a>
                </div>
            </div>
        </div>
    );
};