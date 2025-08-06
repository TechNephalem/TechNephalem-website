import {
    Brain, Cloud, Blocks, Layers, Target, Eye, Users, Check, ArrowRight,
    Play, Sun, Moon, Menu, Github, ExternalLink, Quote, Star, Mail,
    Phone, MapPin, Linkedin, Twitter, Send, Loader, X, ChevronLeft,
    ChevronRight
} from 'lucide-react';
import { appData } from '../../data/appData';
import { useEffect, useRef, useState } from 'react';

export const ProcessStep = ({ step, index }) => {
    const ref = useRef(null);
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setVisible(true);
                    observer.unobserve(ref.current); // Remove observer after animation triggers
                }
            },
            { threshold: 0.1 }
        );

        if (ref.current) observer.observe(ref.current);
        return () => observer.disconnect();
    }, []);

    return (
        <div
            ref={ref}
            className={`process-step fade-in ${visible ? 'visible' : ''}`}
            style={{ animationDelay: `${index * 0.2}s` }}
        >
            <div className="step-number">{step.step}</div>
            <div className="step-content">
                <h3>{step.title}</h3>
                <p>{step.description}</p>
            </div>
        </div>
    );
};

export const ProcessSection = () => {
    console.log(appData.process)
    return (
        <section id="process" className="section section--bg">
            <div className="container">
                <div className="section-header">
                    <div className="section-badge">Our Process</div>
                    <h2 className="section-title split-text">How We Build Excellence</h2>
                    <p className="section-subtitle">Our proven methodology for delivering exceptional results</p>
                </div>
                <div className="process-timeline">
                    <div className="timeline-progress">
                        <div className="progress-line"></div>
                    </div>
                    <div className="process-steps">
                        {appData.process.map((step, index) => (
                            <ProcessStep key={index} step={step} index={index} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};