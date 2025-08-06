import {
    Brain, Cloud, Blocks, Layers, Target, Eye, Users, Check, ArrowRight,
    Play, Sun, Moon, Menu, Github, ExternalLink, Quote, Star, Mail,
    Phone, MapPin, Linkedin, Twitter, Send, Loader, X, ChevronLeft,
    ChevronRight
} from 'lucide-react';
export const MobileMenuToggle = ({ isOpen, onToggle }) => (
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