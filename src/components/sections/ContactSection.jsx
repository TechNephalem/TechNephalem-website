import {
    Brain, Cloud, Blocks, Layers, Target, Eye, Users, Check, ArrowRight,
    Play, Sun, Moon, Menu, Github, ExternalLink, Quote, Star, Mail,
    Phone, MapPin, Linkedin, Twitter, Instagram,Send, Loader, X, ChevronLeft,
    ChevronRight
} from 'lucide-react';
import { appData } from '../../data/appData';
import { useState } from 'react';
const ContactCard = ({ icon: Icon, title, info }) => (
    <div className="contact-card glass-card">
        <div className="contact-icon">
            <Icon />
        </div>
        <div className="contact-details">
            <h4>{title}</h4>
            <p>{info}</p>
        </div>
    </div>
);

export const SocialLink = ({ href, icon: Icon }) => (
    <a href={href} target="_blank" rel="noopener noreferrer" className="social-link magnetic-btn">
        <Icon />
    </a>
);

const FormGroup = ({ label, children, className = "" }) => (
    <div className={`form-group ${className}`}>
        <label className="form-label">{label}</label>
        {children}
        <div className="form-highlight"></div>
    </div>
);

const ContactForm = () => {
    const [formState, setFormState] = useState({
        name: '',
        email: '',
        company: '',
        projectType: '',
        message: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState('idle'); // idle, loading, success, error

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormState(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitStatus('loading');

        try {
            // Simulate API call
            await new Promise(resolve => setTimeout(resolve, 2000));

            setSubmitStatus('success');
            setFormState({
                name: '',
                email: '',
                company: '',
                projectType: '',
                message: ''
            });

            setTimeout(() => {
                setSubmitStatus('idle');
                setIsSubmitting(false);
            }, 3000);

        } catch (error) {
            setSubmitStatus('error');
            setTimeout(() => {
                setSubmitStatus('idle');
                setIsSubmitting(false);
            }, 3000);
        }
    };

    const getSubmitButtonContent = () => {
        switch (submitStatus) {
            case 'loading':
                return (
                    <>
                        <Loader className="animate-spin" />
                        <span className="btn-text">Sending...</span>
                    </>
                );
            case 'success':
                return (
                    <>
                        <Check />
                        <span className="btn-text">Message Sent!</span>
                    </>
                );
            case 'error':
                return (
                    <>
                        <X />
                        <span className="btn-text">Error Sending</span>
                    </>
                );
            default:
                return (
                    <>
                        <span className="btn-text">Send Message</span>
                        <div className="btn-bg"></div>
                        <Send className="btn-icon" />
                    </>
                );
        }
    };

    return (
        <form className="contact-form glass-card" onSubmit={handleSubmit}>
            <div className="form-row">
                <FormGroup label="Name">
                    <input
                        type="text"
                        name="name"
                        className="form-control"
                        value={formState.name}
                        onChange={handleInputChange}
                        required
                    />
                </FormGroup>
                <FormGroup label="Email">
                    <input
                        type="email"
                        name="email"
                        className="form-control"
                        value={formState.email}
                        onChange={handleInputChange}
                        required
                    />
                </FormGroup>
            </div>
            <FormGroup label="Company">
                <input
                    type="text"
                    name="company"
                    className="form-control"
                    value={formState.company}
                    onChange={handleInputChange}
                />
            </FormGroup>
            <FormGroup label="Project Type">
                <select
                    name="projectType"
                    className="form-control"
                    value={formState.projectType}
                    onChange={handleInputChange}
                >
                    <option value="" disabled hidden>Select a service</option>
                    <option value="ai">AI Products</option>
                    <option value="saas">SaaS Solutions</option>
                    <option value="web3">Web3 Tools</option>
                    <option value="website">Web Applications</option>
                </select>
            </FormGroup>
            <FormGroup label="Message">
                <textarea
                    name="message"
                    className="form-control"
                    rows="5"
                    value={formState.message}
                    onChange={handleInputChange}
                    required
                />
            </FormGroup>
            <button
                type="submit"
                className={`btn btn--primary btn--full-width btn--lg magnetic-btn ${submitStatus === 'success' ? 'success' : ''} ${submitStatus === 'error' ? 'error' : ''}`}
                disabled={isSubmitting}
            >
                {getSubmitButtonContent()}
            </button>
        </form>
    );
};

export const ContactSection = () => {
    const contactCards = [
        {
            icon: Mail,
            title: "Email Us",
            info: appData.contact.email
        },
        {
            icon: Phone,
            title: "Call Us",
            info: appData.contact.phone
        },
        
        // {
        //     icon: MapPin,
        //     title: "Visit Us",
        //     info: appData.contact.address
        // }
    ];

    const socialLinks = [
        { href: appData.contact.linkedin, icon: Linkedin },
        { href: appData.contact.twitter, icon: Twitter },
        // { href: appData.contact.github, icon: Github },
        { href: appData.contact.instagram, icon: Instagram }
    ];

    return (
        <section id="contact" className="section">
            <div className="container">
                <div className="section-header">
                    <div className="section-badge">Get In Touch</div>
                    <h2 className="section-title split-text">Let's Create Something Amazing</h2>
                    <p className="section-subtitle">Ready to bring your vision to life with cutting-edge technology?</p>
                </div>
                <div className="contact-content">
                    <div className="contact-info">
                        <div className="contact-cards">
                            {contactCards.map((card, index) => (
                                <ContactCard key={index} {...card} />
                            ))}
                        </div>
                        <div className="social-links">
                            {socialLinks.map((link, index) => (
                                <SocialLink key={index} {...link} />
                            ))}
                        </div>
                    </div>
                    <ContactForm />
                </div>
            </div>
        </section>
    );
};