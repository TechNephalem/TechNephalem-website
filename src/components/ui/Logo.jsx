import React from 'react';
import {
    Brain, Cloud, Blocks, Layers, Target, Eye, Users, Check, ArrowRight,
    Play, Sun, Moon, Menu, Github, ExternalLink, Quote, Star, Mail,
    Phone, MapPin, Linkedin, Twitter, Send, Loader, X, ChevronLeft,
    ChevronRight
} from 'lucide-react';
import TechnephalemLogo from '../../assets/Technephalem.png';

const Logo = () => (
    <div className="brand-logo">
        <div className="logo-icon">
            <div className="logo-layers">
                <div className="layer"></div>
                <div className="layer"></div>
                <div className="layer"></div>
                <img
                    src={TechnephalemLogo}
                    alt="Tech Nephalem Logo"
                    className="logo-image"
                />
            </div>
        </div>

        <span className="brand-text">Tech Nephalem</span>
    </div>
);

export default Logo;