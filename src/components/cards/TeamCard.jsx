import {
    Brain, Cloud, Blocks, Layers, Target, Eye, Users, Check, ArrowRight,
    Play, Sun, Moon, Menu, Github, ExternalLink, Quote, Star, Mail,
    Phone, MapPin, Linkedin, Twitter, Send, Loader, X, ChevronLeft,
    ChevronRight
} from 'lucide-react';
export const TeamCard = ({ member, index }) => (
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