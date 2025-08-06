import {
    Brain, Cloud, Blocks, Layers, Target, Eye, Users, Check, ArrowRight,
    Play, Sun, Moon, Menu, Github, ExternalLink, Quote, Star, Mail,
    Phone, MapPin, Linkedin, Twitter, Send, Loader, X, ChevronLeft,
    ChevronRight
} from 'lucide-react';

export const ThemeToggle = ({ theme, onToggle }) => (
    <button 
        className={`theme-toggle ${theme === 'dark' ? 'dark' : 'light'}`} 
        onClick={onToggle} 
        aria-label="Toggle theme"
    >
        <div className="theme-toggle-track">
            <div className="theme-toggle-thumb">
                {theme === 'light' ? (
                    <Sun className="theme-icon" />
                ) : (
                    <Moon className="theme-icon" />
                )}
            </div>
        </div>
    </button>
);