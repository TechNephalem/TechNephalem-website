import {
    Brain, Cloud, Blocks, Layers, Target, Eye, Users, Check, ArrowRight,
    Play, Sun, Moon, Menu, Github, ExternalLink, Quote, Star, Mail,
    Phone, MapPin, Linkedin, Twitter, Send, Loader, X, ChevronLeft,
    ChevronRight
} from 'lucide-react';
import { ProjectCard } from "../cards/ProjectCard";
import { useState } from 'react';
import { appData } from '../../data/appData';
const ProjectFilters = ({ currentFilter, onFilterChange }) => {
    const filters = [
        { key: 'all', label: 'All Projects' },
        { key: 'AI Products', label: 'AI Products' },
        { key: 'SaaS Solutions', label: 'SaaS Solutions' },
        { key: 'Web3 Tools', label: 'Web3 Tools' },
        { key: 'MERN Applications', label: 'MERN Applications' }
    ];

    return (
        <div className="project-filters">
            {filters.map((filter) => (
                <button
                    key={filter.key}
                    className={`filter-btn magnetic-btn ${currentFilter === filter.key ? 'active' : ''}`}
                    onClick={() => onFilterChange(filter.key)}
                >
                    {filter.label}
                </button>
            ))}
        </div>
    );
};

export const ProjectsSection = () => {
    const [currentFilter, setCurrentFilter] = useState('all');

    const filteredProjects = currentFilter === 'all'
        ? appData.projects
        : appData.projects.filter(project => project.category === currentFilter);

    return (
        <section id="projects" className="section">
            <div className="container">
                <div className="section-header">
                    <div className="section-badge">Our Projects</div>
                    <h2 className="section-title split-text">Featured Work</h2>
                    <p className="section-subtitle">Showcase of our latest innovations and cutting-edge solutions</p>
                </div>
                <ProjectFilters
                    currentFilter={currentFilter}
                    onFilterChange={setCurrentFilter}
                />
                <div className="projects-showcase">
                    <div className="projects-grid">
                        {filteredProjects.map((project, index) => (
                            <ProjectCard key={index} project={project} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};