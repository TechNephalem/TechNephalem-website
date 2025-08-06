import React, { useState, useEffect, useRef } from 'react';
import {
    Brain, Cloud, Blocks, Layers, Target, Eye, Users, Check, ArrowRight,
    Play, Sun, Moon, Menu, Github, ExternalLink, Quote, Star, Mail,
    Phone, MapPin, Linkedin, Twitter, Send, Loader, X, ChevronLeft,
    ChevronRight
} from 'lucide-react';

// Application data
const appData = {
    "company": {
        "name": "Tech Nephalem",
        "tagline": "AI. SaaS. Web3. Full-Stack Innovation from a New Breed of Builders.",
        "description": "We are a next-gen tech collective building scalable AI SaaS platforms, full-stack MERN applications, and Web3-powered ecosystems.",
        "cta": "Let's Build Together",
        "stats": {
            "projectsCompleted": "150+",
            "clientsSatisfied": "75+",
            "yearsExperience": "5+",
            "teamMembers": "12+"
        }
    },
    "services": [
        {
            "title": "AI Products",
            "description": "Cutting-edge AI solutions that transform business operations through intelligent automation and machine learning.",
            "features": ["Machine Learning Models", "Natural Language Processing", "Computer Vision", "Predictive Analytics"],
            "icon": "brain",
            "color": "#6366f1"
        },
        {
            "title": "SaaS Solutions",
            "description": "Scalable software-as-a-service platforms built for modern businesses with cloud-native architecture.",
            "features": ["Cloud Infrastructure", "Multi-tenant Architecture", "API-first Design", "Real-time Analytics"],
            "icon": "cloud",
            "color": "#10b981"
        },
        {
            "title": "Web3 Tools",
            "description": "Decentralized applications and blockchain solutions for the next generation of web technology.",
            "features": ["Smart Contracts", "DeFi Protocols", "NFT Platforms", "Blockchain Integration"],
            "icon": "blocks",
            "color": "#f59e0b"
        },
        {
            "title": "MERN Applications",
            "description": "Full-stack web applications using MongoDB, Express.js, React, and Node.js for robust digital experiences.",
            "features": ["React Frontend", "Node.js Backend", "MongoDB Database", "RESTful APIs"],
            "icon": "layers",
            "color": "#ef4444"
        }
    ],
    "projects": [
        {
            "title": "AI-Powered Analytics Platform",
            "description": "Real-time business intelligence platform with machine learning insights that processes millions of data points daily",
            "category": "AI Products",
            "technologies": ["Python", "TensorFlow", "React", "PostgreSQL", "AWS"],
            "results": {
                "performance": "99.9% uptime",
                "users": "50K+ active users",
                "dataProcessed": "10TB+ daily"
            },
            "challenge": "Creating a scalable platform that could handle massive data volumes while providing real-time insights",
            "solution": "Implemented microservices architecture with machine learning pipelines for instant data processing",
            "github": "#",
            "demo": "#",
            "featured": true
        },
        {
            "title": "Multi-Tenant SaaS Dashboard",
            "description": "Enterprise-grade SaaS platform serving thousands of users with real-time collaboration features",
            "category": "SaaS Solutions",
            "technologies": ["Node.js", "React", "AWS", "MongoDB", "Redis"],
            "results": {
                "scalability": "10K+ concurrent users",
                "performance": "< 200ms response time",
                "reliability": "99.95% uptime"
            },
            "challenge": "Building a multi-tenant architecture that scales efficiently while maintaining data isolation",
            "solution": "Developed custom tenant management system with optimized database sharding",
            "github": "#",
            "demo": "#",
            "featured": true
        },
        {
            "title": "DeFi Trading Protocol",
            "description": "Decentralized finance platform enabling automated trading strategies with advanced security features",
            "category": "Web3 Tools",
            "technologies": ["Solidity", "Web3.js", "React", "IPFS", "Ethereum"],
            "results": {
                "tvl": "$50M+ Total Value Locked",
                "transactions": "100K+ successful trades",
                "security": "Zero security incidents"
            },
            "challenge": "Creating a secure DeFi protocol that could handle high-frequency trading",
            "solution": "Implemented advanced smart contract security measures and gas optimization",
            "github": "#",
            "demo": "#",
            "featured": true
        },
        {
            "title": "E-commerce MERN Stack",
            "description": "Full-featured e-commerce platform with real-time inventory management and advanced analytics",
            "category": "MERN Applications",
            "technologies": ["MongoDB", "Express.js", "React", "Node.js", "Stripe"],
            "results": {
                "revenue": "$2M+ in transactions",
                "conversion": "15% conversion rate",
                "performance": "Sub-second load times"
            },
            "challenge": "Building a scalable e-commerce solution with complex inventory management",
            "solution": "Developed real-time inventory system with automated reorder points",
            "github": "#",
            "demo": "#",
            "featured": false
        },
        {
            "title": "Blockchain Identity System",
            "description": "Decentralized identity verification platform ensuring privacy and security",
            "category": "Web3 Tools",
            "technologies": ["Ethereum", "React", "Node.js", "MetaMask", "IPFS"],
            "results": {
                "users": "25K+ verified identities",
                "security": "Zero data breaches",
                "adoption": "95% user satisfaction"
            },
            "challenge": "Creating a user-friendly identity verification system on blockchain",
            "solution": "Developed intuitive UX flow that abstracts blockchain complexity",
            "github": "#",
            "demo": "#",
            "featured": false
        },
        {
            "title": "AI Content Generator",
            "description": "GPT-powered content creation tool helping marketing teams generate high-quality content",
            "category": "AI Products",
            "technologies": ["OpenAI API", "React", "Express.js", "Redis", "PostgreSQL"],
            "results": {
                "content": "1M+ pieces generated",
                "efficiency": "80% time savings",
                "quality": "95% approval rate"
            },
            "challenge": "Creating AI-generated content that maintains brand voice consistency",
            "solution": "Implemented fine-tuned models with brand-specific training data",
            "github": "#",
            "demo": "#",
            "featured": false
        }
    ],
    "team": [
        {
            "name": "Alex Chen",
            "role": "CEO & Lead Architect",
            "expertise": ["System Architecture", "AI/ML", "Leadership"],
            "bio": "Former senior engineer at Google with 8+ years building scalable systems"
        },
        {
            "name": "Sarah Kim",
            "role": "CTO & Full-Stack Lead",
            "expertise": ["MERN Stack", "DevOps", "Web3"],
            "bio": "Full-stack expert with extensive experience in modern web technologies"
        },
        {
            "name": "Michael Rodriguez",
            "role": "AI/ML Engineer",
            "expertise": ["Machine Learning", "Data Science", "Python"],
            "bio": "PhD in Computer Science specializing in artificial intelligence and NLP"
        },
        {
            "name": "Emily Zhang",
            "role": "Blockchain Developer",
            "expertise": ["Solidity", "DeFi", "Smart Contracts"],
            "bio": "Pioneer in DeFi space with multiple successful protocol launches"
        }
    ],
    "process": [
        {
            "step": 1,
            "title": "Discovery & Strategy",
            "description": "We deep-dive into your business goals, user needs, and technical requirements to create a comprehensive project roadmap."
        },
        {
            "step": 2,
            "title": "Design & Architecture",
            "description": "Our team crafts user-centered designs and robust system architectures that scale with your business growth."
        },
        {
            "step": 3,
            "title": "Development & Testing",
            "description": "We build your solution using cutting-edge technologies with rigorous testing at every stage of development."
        },
        {
            "step": 4,
            "title": "Launch & Support",
            "description": "We ensure smooth deployment and provide ongoing support to keep your application running at peak performance."
        }
    ],
    "testimonials": [
        {
            "name": "David Johnson",
            "company": "TechCorp Industries",
            "role": "CTO",
            "content": "Tech Nephalem transformed our legacy system into a modern, scalable platform. Their expertise in AI integration exceeded our expectations.",
            "rating": 5
        },
        {
            "name": "Lisa Wang",
            "company": "StartupX",
            "role": "Founder",
            "content": "The team's ability to translate complex requirements into elegant solutions is remarkable. Our platform has seen 300% growth since launch.",
            "rating": 5
        },
        {
            "name": "James Miller",
            "company": "FinanceFlow",
            "role": "Product Manager",
            "content": "Working with Tech Nephalem was seamless. They delivered a sophisticated DeFi platform that our users love.",
            "rating": 5
        }
    ],
    "contact": {
        "email": "hello@technephalem.com",
        "phone": "+1 (555) 123-4567",
        "address": "Innovation District, Tech City",
        "linkedin": "https://linkedin.com/company/tech-nephalem",
        "twitter": "https://twitter.com/technephalem",
        "github": "https://github.com/tech-nephalem"
    }
};

// Custom Hooks
const useCounter = (target, trigger) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        if (!trigger) return;

        let current = 0;
        const increment = target / 60;
        const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
                current = target;
                clearInterval(timer);
            }
            setCount(Math.floor(current));
        }, 16);

        return () => clearInterval(timer);
    }, [target, trigger]);

    return count;
};

const useInView = (options = {}) => {
    const [isInView, setIsInView] = useState(false);
    const ref = useRef();

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => setIsInView(entry.isIntersecting),
            { threshold: 0.1, ...options }
        );

        if (ref.current) observer.observe(ref.current);

        return () => observer.disconnect();
    }, []);

    return [ref, isInView];
};

// UI Components
const Logo = () => (
    <div className="brand-logo">
        <div className="logo-icon">
            <div className="logo-layers">
                <div className="layer"></div>
                <div className="layer"></div>
                <div className="layer"></div>
            </div>
        </div>
        <span className="brand-text">Tech Nephalem</span>
    </div>
);

const ThemeToggle = ({ theme, onToggle }) => (
    <button className="theme-toggle" onClick={onToggle} aria-label="Toggle theme">
        <div className="theme-toggle-track">
            <div className="theme-toggle-thumb">
                <Sun className="theme-icon theme-icon-light" />
                <Moon className="theme-icon theme-icon-dark" />
            </div>
        </div>
    </button>
);

const MobileMenuToggle = ({ isOpen, onToggle }) => (
    <button
        className={`mobile-menu-toggle ${isOpen ? 'active' : ''}`}
        onClick={onToggle}
        aria-label="Toggle menu"
    >
        <span className="hamburger-line"></span>
        <span className="hamburger-line"></span>
        <span className="hamburger-line"></span>
    </button>
);

const Navigation = ({ activeSection, theme, onThemeToggle }) => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navItems = [
        { href: '#home', label: 'Home' },
        { href: '#about', label: 'About' },
        { href: '#services', label: 'What We Build' },
        { href: '#projects', label: 'Projects' },
        { href: '#process', label: 'Process' },
        { href: '#team', label: 'Team' },
        { href: '#testimonials', label: 'Testimonials' },
        { href: '#contact', label: 'Contact' }
    ];

    const handleNavClick = (href) => {
        const element = document.querySelector(href);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
        setMobileMenuOpen(false);
    };

    return (
        <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
            <div className="nav-container">
                <div className="nav-brand">
                    <Logo />
                </div>
                <div className={`nav-menu ${mobileMenuOpen ? 'active' : ''}`}>
                    {navItems.map((item) => (
                        <a
                            key={item.href}
                            href={item.href}
                            className={`nav-link ${activeSection === item.href.slice(1) ? 'active' : ''}`}
                            onClick={(e) => {
                                e.preventDefault();
                                handleNavClick(item.href);
                            }}
                            data-text={item.label}
                        >
                            {item.label}
                        </a>
                    ))}
                </div>
                <div className="nav-actions">
                    <ThemeToggle theme={theme} onToggle={onThemeToggle} />
                    <MobileMenuToggle
                        isOpen={mobileMenuOpen}
                        onToggle={() => setMobileMenuOpen(!mobileMenuOpen)}
                    />
                </div>
            </div>
        </nav>
    );
};

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
                        <StatCounter target="150" label="Projects Completed" />
                        <StatCounter target="75" label="Clients Satisfied" />
                        <StatCounter target="5" label="Years Experience" />
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
                        <button
                            className="btn btn--outline btn--lg secondary-cta magnetic-btn"
                            onClick={onProjectsClick}
                        >
                            <span className="btn-text">View Our Work</span>
                            <div className="btn-bg"></div>
                            <Play className="btn-icon" />
                        </button>
                    </div>
                </div>
                <div className="hero-visual">
                    <div className="floating-ecosystem">
                        <TechOrb type="ai" label="AI" />
                        <TechOrb type="saas" label="SaaS" />
                        <TechOrb type="web3" label="Web3" />
                        <TechOrb type="mern" label="MERN" />
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

const AboutCard = ({ icon: Icon, title, description }) => (
    <div className="about-card glass-card" data-tilt>
        <div className="card-glow"></div>
        <div className="about-icon">
            <Icon />
        </div>
        <h3>{title}</h3>
        <p>{description}</p>
    </div>
);

const AboutSection = () => {
    const aboutCards = [
        {
            icon: Target,
            title: "Our Mission",
            description: "To empower businesses with cutting-edge technology solutions that drive innovation and growth in the digital age."
        },
        {
            icon: Eye,
            title: "Our Vision",
            description: "To be the leading force in next-generation technology development, bridging the gap between AI, Web3, and traditional software."
        },
        {
            icon: Users,
            title: "Our Team",
            description: "A diverse collective of expert developers, AI specialists, and blockchain engineers passionate about building the future."
        }
    ];

    return (
        <section id="about" className="section">
            <div className="container">
                <div className="section-header">
                    <div className="section-badge">About Tech Nephalem</div>
                    <h2 className="section-title split-text">Innovating the Future of Technology</h2>
                    <p className="section-subtitle">
                        We are a next-gen tech collective building scalable AI SaaS platforms,
                        full-stack MERN applications, and Web3-powered ecosystems.
                    </p>
                </div>
                <div className="about-grid">
                    {aboutCards.map((card, index) => (
                        <AboutCard key={index} {...card} />
                    ))}
                </div>
            </div>
        </section>
    );
};

const ServiceCard = ({ service }) => {
    const iconMap = {
        brain: Brain,
        cloud: Cloud,
        blocks: Blocks,
        layers: Layers
    };

    const Icon = iconMap[service.icon];

    return (
        <div className="service-card premium-card" data-service={service.icon}>
            <div className="service-bg"></div>
            <div className="service-icon">
                <Icon />
            </div>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
            <ul className="service-features">
                {service.features.map((feature, index) => (
                    <li key={index}>
                        <Check />
                        {feature}
                    </li>
                ))}
            </ul>
            <div className="service-overlay">
                <button className="explore-btn">
                    <span>Explore {service.title}</span>
                    <ArrowRight />
                </button>
            </div>
        </div>
    );
};

const ServicesSection = () => {
    return (
        <section id="services" className="section section--bg">
            <div className="container">
                <div className="section-header">
                    <div className="section-badge">What We Build</div>
                    <h2 className="section-title split-text">Cutting-edge Solutions</h2>
                    <p className="section-subtitle">From AI and SaaS to Web3 and full-stack development</p>
                </div>
                <div className="services-showcase">
                    <div className="services-grid">
                        {appData.services.map((service, index) => (
                            <ServiceCard key={index} service={service} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

const ProjectCard = ({ project }) => {
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

const ProjectsSection = () => {
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

const ProcessStep = ({ step, index }) => (
    <div className="process-step fade-in" style={{ animationDelay: `${index * 0.2}s` }}>
        <div className="step-number">{step.step}</div>
        <div className="step-content">
            <h3>{step.title}</h3>
            <p>{step.description}</p>
        </div>
    </div>
);

const ProcessSection = () => {
    return (
        <section id="process" className="section section--bg">
            <div className="container">
                <div className="section-header">
                    <div className="section-badge">Our Process</div>
                    <h2 className="section-title split-text">How We Build Excellence</h2>
                    <p className="section-subtitle">Our proven methodology for delivering exceptional results</p>
                </div>
                <div className="process-timeline">
                    <div className="timeline-progress">
                        <div className="progress-line"></div>
                    </div>
                    <div className="process-steps">
                        {appData.process.map((step, index) => (
                            <ProcessStep key={index} step={step} index={index} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

const TeamCard = ({ member, index }) => (
    <div className="team-card glass-card" style={{ animationDelay: `${index * 0.1}s` }}>
        <div className="team-avatar">
            <div className="avatar-placeholder">
                {member.name.split(' ').map(n => n[0]).join('')}
            </div>
        </div>
        <div className="team-info">
            <h3>{member.name}</h3>
            <p className="team-role">{member.role}</p>
            <p className="team-bio">{member.bio}</p>
            <div className="team-expertise">
                {member.expertise.map((skill, index) => (
                    <span key={index} className="expertise-tag">{skill}</span>
                ))}
            </div>
        </div>
    </div>
);

const TeamSection = () => {
    return (
        <section id="team" className="section">
            <div className="container">
                <div className="section-header">
                    <div className="section-badge">Our Team</div>
                    <h2 className="section-title split-text">Meet the Innovators</h2>
                    <p className="section-subtitle">Expert developers, AI specialists, and blockchain engineers</p>
                </div>
                <div className="team-grid">
                    {appData.team.map((member, index) => (
                        <TeamCard key={index} member={member} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
};

const TestimonialCard = ({ testimonial, isActive }) => (
    <div className={`testimonial-card ${isActive ? 'active' : ''}`}>
        <div className="testimonial-content">
            <div className="testimonial-quote">
                <Quote />
                <p>{testimonial.content}</p>
            </div>
            <div className="testimonial-author">
                <div className="author-info">
                    <h4>{testimonial.name}</h4>
                    <p>{testimonial.role} at {testimonial.company}</p>
                </div>
                <div className="testimonial-rating">
                    {Array(testimonial.rating).fill().map((_, i) => (
                        <Star key={i} />
                    ))}
                </div>
            </div>
        </div>
    </div>
);

const TestimonialsSection = () => {
    const [currentTestimonial, setCurrentTestimonial] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentTestimonial(prev =>
                (prev + 1) % appData.testimonials.length
            );
        }, 8000);

        return () => clearInterval(interval);
    }, []);

    const handlePrevious = () => {
        setCurrentTestimonial(prev =>
            prev === 0 ? appData.testimonials.length - 1 : prev - 1
        );
    };

    const handleNext = () => {
        setCurrentTestimonial(prev =>
            (prev + 1) % appData.testimonials.length
        );
    };

    const goToTestimonial = (index) => {
        setCurrentTestimonial(index);
    };

    return (
        <section id="testimonials" className="section section--bg">
            <div className="container">
                <div className="section-header">
                    <div className="section-badge">Client Testimonials</div>
                    <h2 className="section-title split-text">What Our Clients Say</h2>
                    <p className="section-subtitle">Real feedback from satisfied clients and partners</p>
                </div>
                <div className="testimonials-carousel">
                    <div className="testimonials-track">
                        {appData.testimonials.map((testimonial, index) => (
                            <TestimonialCard
                                key={index}
                                testimonial={testimonial}
                                isActive={index === currentTestimonial}
                            />
                        ))}
                    </div>
                    <div className="carousel-controls">
                        <button className="carousel-btn prev-btn" onClick={handlePrevious}>
                            <ChevronLeft />
                        </button>
                        <div className="carousel-dots">
                            {appData.testimonials.map((_, index) => (
                                <button
                                    key={index}
                                    className={`carousel-dot ${index === currentTestimonial ? 'active' : ''}`}
                                    onClick={() => goToTestimonial(index)}
                                />
                            ))}
                        </div>
                        <button className="carousel-btn next-btn" onClick={handleNext}>
                            <ChevronRight />
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

const ContactCard = ({ icon: Icon, title, info }) => (
    <div className="contact-card glass-card">
        <div className="contact-icon">
            <Icon />
        </div>
        <div className="contact-details">
            <h4>{title}</h4>
            <p>{info}</p>
        </div>
    </div>
);

const SocialLink = ({ href, icon: Icon }) => (
    <a href={href} target="_blank" rel="noopener noreferrer" className="social-link magnetic-btn">
        <Icon />
    </a>
);

const FormGroup = ({ label, children, className = "" }) => (
    <div className={`form-group ${className}`}>
        <label className="form-label">{label}</label>
        {children}
        <div className="form-highlight"></div>
    </div>
);

const ContactForm = () => {
    const [formState, setFormState] = useState({
        name: '',
        email: '',
        company: '',
        projectType: '',
        message: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState('idle'); // idle, loading, success, error

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormState(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitStatus('loading');

        try {
            // Simulate API call
            await new Promise(resolve => setTimeout(resolve, 2000));

            setSubmitStatus('success');
            setFormState({
                name: '',
                email: '',
                company: '',
                projectType: '',
                message: ''
            });

            setTimeout(() => {
                setSubmitStatus('idle');
                setIsSubmitting(false);
            }, 3000);

        } catch (error) {
            setSubmitStatus('error');
            setTimeout(() => {
                setSubmitStatus('idle');
                setIsSubmitting(false);
            }, 3000);
        }
    };

    const getSubmitButtonContent = () => {
        switch (submitStatus) {
            case 'loading':
                return (
                    <>
                        <Loader className="animate-spin" />
                        <span className="btn-text">Sending...</span>
                    </>
                );
            case 'success':
                return (
                    <>
                        <Check />
                        <span className="btn-text">Message Sent!</span>
                    </>
                );
            case 'error':
                return (
                    <>
                        <X />
                        <span className="btn-text">Error Sending</span>
                    </>
                );
            default:
                return (
                    <>
                        <span className="btn-text">Send Message</span>
                        <div className="btn-bg"></div>
                        <Send className="btn-icon" />
                    </>
                );
        }
    };

    return (
        <form className="contact-form glass-card" onSubmit={handleSubmit}>
            <div className="form-row">
                <FormGroup label="Name">
                    <input
                        type="text"
                        name="name"
                        className="form-control"
                        value={formState.name}
                        onChange={handleInputChange}
                        required
                    />
                </FormGroup>
                <FormGroup label="Email">
                    <input
                        type="email"
                        name="email"
                        className="form-control"
                        value={formState.email}
                        onChange={handleInputChange}
                        required
                    />
                </FormGroup>
            </div>
            <FormGroup label="Company">
                <input
                    type="text"
                    name="company"
                    className="form-control"
                    value={formState.company}
                    onChange={handleInputChange}
                />
            </FormGroup>
            <FormGroup label="Project Type">
                <select
                    name="projectType"
                    className="form-control"
                    value={formState.projectType}
                    onChange={handleInputChange}
                >
                    <option value="">Select a service</option>
                    <option value="ai">AI Products</option>
                    <option value="saas">SaaS Solutions</option>
                    <option value="web3">Web3 Tools</option>
                    <option value="mern">MERN Applications</option>
                </select>
            </FormGroup>
            <FormGroup label="Message">
                <textarea
                    name="message"
                    className="form-control"
                    rows="5"
                    value={formState.message}
                    onChange={handleInputChange}
                    required
                />
            </FormGroup>
            <button
                type="submit"
                className={`btn btn--primary btn--full-width btn--lg magnetic-btn ${submitStatus === 'success' ? 'success' : ''} ${submitStatus === 'error' ? 'error' : ''}`}
                disabled={isSubmitting}
            >
                {getSubmitButtonContent()}
            </button>
        </form>
    );
};

const ContactSection = () => {
    const contactCards = [
        {
            icon: Mail,
            title: "Email Us",
            info: appData.contact.email
        },
        {
            icon: Phone,
            title: "Call Us",
            info: appData.contact.phone
        },
        {
            icon: MapPin,
            title: "Visit Us",
            info: appData.contact.address
        }
    ];

    const socialLinks = [
        { href: appData.contact.linkedin, icon: Linkedin },
        { href: appData.contact.twitter, icon: Twitter },
        { href: appData.contact.github, icon: Github }
    ];

    return (
        <section id="contact" className="section">
            <div className="container">
                <div className="section-header">
                    <div className="section-badge">Get In Touch</div>
                    <h2 className="section-title split-text">Let's Create Something Amazing</h2>
                    <p className="section-subtitle">Ready to bring your vision to life with cutting-edge technology?</p>
                </div>
                <div className="contact-content">
                    <div className="contact-info">
                        <div className="contact-cards">
                            {contactCards.map((card, index) => (
                                <ContactCard key={index} {...card} />
                            ))}
                        </div>
                        <div className="social-links">
                            {socialLinks.map((link, index) => (
                                <SocialLink key={index} {...link} />
                            ))}
                        </div>
                    </div>
                    <ContactForm />
                </div>
            </div>
        </section>
    );
};

const Footer = () => {
    const footerSections = [
        {
            title: "Company",
            links: [
                { href: "#about", label: "About Us" },
                { href: "#team", label: "Our Team" },
                { href: "#process", label: "Our Process" },
                { href: "#contact", label: "Contact" }
            ]
        },
        {
            title: "Services",
            links: [
                { href: "#services", label: "AI Products" },
                { href: "#services", label: "SaaS Solutions" },
                { href: "#services", label: "Web3 Tools" },
                { href: "#services", label: "MERN Apps" }
            ]
        },
        {
            title: "Resources",
            links: [
                { href: "#projects", label: "Projects" },
                { href: "#testimonials", label: "Testimonials" },
                { href: "#process", label: "Methodology" }
            ]
        }
    ];

    const socialLinks = [
        { href: appData.contact.linkedin, icon: Linkedin },
        { href: appData.contact.twitter, icon: Twitter },
        { href: appData.contact.github, icon: Github }
    ];

    const handleLinkClick = (href) => {
        const element = document.querySelector(href);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <footer className="footer">
            <div className="footer-bg">
                <div className="footer-pattern"></div>
            </div>
            <div className="container">
                <div className="footer-content">
                    <div className="footer-brand">
                        <Logo />
                        <p>Building the future with AI, SaaS, Web3, and Full-Stack Innovation.</p>
                        <div className="footer-social">
                            {socialLinks.map((link, index) => (
                                <SocialLink key={index} {...link} />
                            ))}
                        </div>
                    </div>
                    <div className="footer-links">
                        {footerSections.map((section, index) => (
                            <div key={index} className="footer-section">
                                <h4>{section.title}</h4>
                                {section.links.map((link, linkIndex) => (
                                    <a
                                        key={linkIndex}
                                        href={link.href}
                                        onClick={(e) => {
                                            e.preventDefault();
                                            handleLinkClick(link.href);
                                        }}
                                    >
                                        {link.label}
                                    </a>
                                ))}
                            </div>
                        ))}
                    </div>
                </div>
                <div className="footer-bottom">
                    <p>&copy; 2025 Tech Nephalem. All rights reserved. Crafted with ❤️ and cutting-edge technology.</p>
                </div>
            </div>
        </footer>
    );
};

const PageLoader = ({ isLoading }) => {
    if (!isLoading) return null;

    return (
        <div className="page-loader">
            <div className="loader-content">
                <div className="logo-animation">
                    <span className="brand-text">Tech Nephalem</span>
                </div>
                <div className="loading-bar">
                    <div className="loading-progress"></div>
                </div>
            </div>
        </div>
    );
};

const CursorTrail = () => {
    const cursorDotRef = useRef();
    const cursorOutlineRef = useRef();

    useEffect(() => {
        if (window.innerWidth <= 768) return; // Skip on mobile

        let mouseX = 0, mouseY = 0;
        let cursorX = 0, cursorY = 0;

        const handleMouseMove = (e) => {
            mouseX = e.clientX;
            mouseY = e.clientY;
        };

        const animateCursor = () => {
            const delay = 0.1;
            cursorX += (mouseX - cursorX) * delay;
            cursorY += (mouseY - cursorY) * delay;

            if (cursorDotRef.current) {
                cursorDotRef.current.style.transform = `translate(${mouseX - 4}px, ${mouseY - 4}px)`;
            }
            if (cursorOutlineRef.current) {
                cursorOutlineRef.current.style.transform = `translate(${cursorX - 20}px, ${cursorY - 20}px)`;
            }

            requestAnimationFrame(animateCursor);
        };

        document.addEventListener('mousemove', handleMouseMove);
        animateCursor();

        return () => {
            document.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    return (
        <>
            <div className="cursor-dot" ref={cursorDotRef}></div>
            <div className="cursor-outline" ref={cursorOutlineRef}></div>
        </>
    );
};

// Main App Component
const TechNephalemApp = () => {
    const [theme, setTheme] = useState('light');
    const [activeSection, setActiveSection] = useState('home');
    const [isLoading, setIsLoading] = useState(true);

    // Initialize theme
    useEffect(() => {
        const savedTheme = localStorage.getItem('theme');
        const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
        const initialTheme = savedTheme || systemTheme;

        setTheme(initialTheme);
        document.documentElement.setAttribute('data-color-scheme', initialTheme);
    }, []);

    // Handle theme toggle
    const handleThemeToggle = () => {
        const newTheme = theme === 'dark' ? 'light' : 'dark';
        setTheme(newTheme);
        document.documentElement.setAttribute('data-color-scheme', newTheme);
        localStorage.setItem('theme', newTheme);
    };

    // Handle scroll and active section
    useEffect(() => {
        const handleScroll = () => {
            const sections = document.querySelectorAll('section[id]');
            const scrollPosition = window.scrollY + 100;

            sections.forEach(section => {
                const sectionTop = section.offsetTop;
                const sectionHeight = section.offsetHeight;
                const sectionId = section.getAttribute('id');

                if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                    setActiveSection(sectionId);
                }
            });
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Handle loading
    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 2000);

        return () => clearTimeout(timer);
    }, []);

    // Smooth scroll to section
    const scrollToSection = (sectionId) => {
        const element = document.querySelector(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const handleContactClick = () => scrollToSection('#contact');
    const handleProjectsClick = () => scrollToSection('#projects');

    return (
        <div className="App">
            <CursorTrail />
            <PageLoader isLoading={isLoading} />

            <Navigation
                activeSection={activeSection}
                theme={theme}
                onThemeToggle={handleThemeToggle}
            />

            <HeroSection
                onContactClick={handleContactClick}
                onProjectsClick={handleProjectsClick}
            />

            <AboutSection />
            <ServicesSection />
            <ProjectsSection />
            <ProcessSection />
            <TeamSection />
            <TestimonialsSection />
            <ContactSection />
            <Footer />
        </div>
    );
};

export default TechNephalemApp;