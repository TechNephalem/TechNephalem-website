import {
    Brain, Cloud, Blocks, Layers, Target, Eye, Users, Check, ArrowRight,
    Play, Sun, Moon, Menu, Github, ExternalLink, Quote, Star, Mail,
    Phone, MapPin, Linkedin, Twitter, Send, Loader, X, ChevronLeft,
    ChevronRight
} from 'lucide-react';
import { MobileMenuToggle } from '../ui/MobileMenuToggle';
import Logo from '../ui/Logo';
import { ThemeToggle } from '../ui/ThemeToggle';
import { useState,useEffect } from 'react';
export const Navigation = ({ activeSection, theme, onThemeToggle }) => {
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
        { href: '#process', label: 'Process' },
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