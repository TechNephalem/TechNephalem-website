import {
    Brain, Cloud, Blocks, Layers, Target, Eye, Users, Check, ArrowRight,
    Play, Sun, Moon, Menu, Github, ExternalLink, Quote, Star, Mail,
    Phone, MapPin, Linkedin, Twitter, Send, Loader, X, ChevronLeft,
    ChevronRight,
    Instagram
} from 'lucide-react';
import Logo from '../ui/Logo';
import { SocialLink } from './ContactSection';
import { appData } from '../../data/appData';
export const Footer = () => {
    const footerSections = [
        {
            title: "Company",
            links: [
                { href: "#about", label: "About Us" },
                // { href: "#team", label: "Our Team" },
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
                { href: "#services", label: "Websites" }
            ]
        },
        {
            title: "Resources",
            links: [
                // { href: "#projects", label: "Projects" },
                // { href: "#testimonials", label: "Testimonials" },
                { href: "#process", label: "Methodology" }
            ]
        }
    ];

    const socialLinks = [
        { href: appData.contact.linkedin, icon: Linkedin },
        { href: appData.contact.twitter, icon: Twitter },
        { href: appData.contact.instagram, icon: Instagram }
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