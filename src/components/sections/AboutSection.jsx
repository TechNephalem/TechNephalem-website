import {
    Brain, Cloud, Blocks, Layers, Target, Eye, Users, Check, ArrowRight,
    Play, Sun, Moon, Menu, Github, ExternalLink, Quote, Star, Mail,
    Phone, MapPin, Linkedin, Twitter, Send, Loader, X, ChevronLeft,
    ChevronRight
} from 'lucide-react';
import { AboutCard } from '../cards/AboutCard';
export const AboutSection = () => {
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
                    <div className="section-badge">About TechNephalem</div>
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