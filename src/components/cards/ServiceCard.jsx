import {
    Brain, Cloud, Blocks, Layers, Target, Eye, Users, Check, ArrowRight,
    Play, Sun, Moon, Menu, Github, ExternalLink, Quote, Star, Mail,
    Phone, MapPin, Linkedin, Twitter, Send, Loader, X, ChevronLeft,
    ChevronRight
} from 'lucide-react';
export const ServiceCard = ({ service }) => {
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
            {/* <div className="service-overlay">
                <button className="explore-btn">
                    <span>Explore {service.title}</span>
                    <ArrowRight />
                </button>
            </div> */}
        </div>
    );
};