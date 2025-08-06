import React from 'react';
import { ArrowRight, Play } from 'lucide-react';
import { useCounter } from '../../hooks/useCounter';
import { useInView } from '../../hooks/useInView';

const StatCounter = ({ target, label, suffix = '+' }) => {
    const [ref, isInView] = useInView();
    const count = useCounter(parseInt(target), isInView);

    return (
        <div className="stat-item" ref={ref}>
            <div className="stat-number" data-target={target}>
                {count}{suffix}
            </div>
            <div className="stat-label">{label}</div>
        </div>
    );
};

const TechOrb = ({ type, label }) => (
    <div className={`tech-orb ${type}-orb`} data-tech={label}>
        <div className="orb-core"></div>
        <div className="orb-rings">
            <div className="ring ring-1"></div>
            <div className="ring ring-2"></div>
            <div className="ring ring-3"></div>
        </div>
        <div className="orb-label">{label}</div>
    </div>
);

const HeroSection = ({ onContactClick, onProjectsClick }) => {
    return (
        <section id="home" className="hero-section">
            <div className="hero-background">
                <div className="animated-shapes">
                    <div className="shape shape-1"></div>
                    <div className="shape shape-2"></div>
                    <div className="shape shape-3"></div>
                    <div className="shape shape-4"></div>
                </div>
                <div className="grid-overlay"></div>
            </div>
            <div className="hero-container">
                <div className="hero-content">
                    <div className="hero-badge">
                        <span className="badge-text">✨ Award-Winning Development Team</span>
                    </div>
                    <h1 className="hero-title">
                        <span className="title-line">
                            <span className="gradient-text reveal-text">AI. SaaS. Web3.</span>
                        </span>
                        <span className="title-line">
                            <span className="reveal-text">Full-Stack Innovation</span>
                        </span>
                        <span className="title-line">
                            <span className="reveal-text">from a New Breed of</span>
                        </span>
                        <span className="title-line">
                            <span className="highlight-text reveal-text">Builders.</span>
                        </span>
                    </h1>
                    <p className="hero-subtitle reveal-text">
                        We are a next-gen tech collective building scalable AI SaaS platforms,
                        full-stack MERN applications, and Web3-powered ecosystems that shape the future.
                    </p>
                    <div className="hero-stats">
                        <StatCounter target="5" label="Projects Completed" />
                        <StatCounter target="5" label="Clients Satisfied" />
                        {/* <StatCounter target="1" label="Years Experience" /> */}
                    </div>
                    <div className="hero-actions">
                        <button
                            className="btn btn--primary btn--lg cta-button magnetic-btn"
                            onClick={onContactClick}
                        >
                            <span className="btn-text">Let's Build Together</span>
                            <div className="btn-bg"></div>
                            <ArrowRight className="btn-icon" />
                        </button>
                        {/* <button
                            className="btn btn--outline btn--lg secondary-cta magnetic-btn"
                            onClick={onProjectsClick}
                        >
                            <span className="btn-text">View Our Work</span>
                            <div className="btn-bg"></div>
                            <Play className="btn-icon" />
                        </button> */}
                    </div>
                </div>
                <div className="hero-visual">
                    <div className="floating-ecosystem">
                        <TechOrb type="ai" label="AI" />
                        <TechOrb type="saas" label="SaaS" />
                        <TechOrb type="web3" label="Web3" />
                        <TechOrb type="webapp" label="Website" />
                        <div className="connection-lines">
                            <svg className="connections" viewBox="0 0 400 400">
                                <path className="connection-path" d="M100 100 L300 100" />
                                <path className="connection-path" d="M100 100 L200 300" />
                                <path className="connection-path" d="M300 100 L200 300" />
                                <path className="connection-path" d="M100 300 L300 300" />
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
            <div className="scroll-indicator">
                <div className="scroll-line"></div>
                <span className="scroll-text">Scroll to explore</span>
            </div>
        </section>
    );
};

export default HeroSection;