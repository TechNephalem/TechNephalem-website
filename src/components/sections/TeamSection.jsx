import { TeamCard } from "../cards/TeamCard";
import {
    Brain, Cloud, Blocks, Layers, Target, Eye, Users, Check, ArrowRight,
    Play, Sun, Moon, Menu, Github, ExternalLink, Quote, Star, Mail,
    Phone, MapPin, Linkedin, Twitter, Send, Loader, X, ChevronLeft,
    ChevronRight
} from 'lucide-react';
import { appData } from "../../data/appData";
export const TeamSection = () => {
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