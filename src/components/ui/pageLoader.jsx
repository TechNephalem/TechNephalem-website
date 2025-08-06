import {
    Brain, Cloud, Blocks, Layers, Target, Eye, Users, Check, ArrowRight,
    Play, Sun, Moon, Menu, Github, ExternalLink, Quote, Star, Mail,
    Phone, MapPin, Linkedin, Twitter, Send, Loader, X, ChevronLeft,
    ChevronRight
} from 'lucide-react';
export const PageLoader = ({ isLoading }) => {
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