import {
    Brain, Cloud, Blocks, Layers, Target, Eye, Users, Check, ArrowRight,
    Play, Sun, Moon, Menu, Github, ExternalLink, Quote, Star, Mail,
    Phone, MapPin, Linkedin, Twitter, Instagram, Send, Loader, X, ChevronLeft,
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

    const sendToTelegram = async (formData) => {
        const botToken = import.meta.env.VITE_TELEGRAM_BOT_TOKEN;
        const chatId = import.meta.env.VITE_TELEGRAM_CHAT_ID;

        // Check if credentials are available
        if (!botToken || !chatId) {
            throw new Error('Telegram credentials not configured');
        }

        const message = `
📝 *New Contact Submission*
👤 *Name*: ${formData.name}
📧 *Email*: ${formData.email}
🏢 *Company*: ${formData.company || 'Not specified'}
💼 *Project Type*: ${formData.projectType || 'Not specified'}
💬 *Message*: ${formData.message}
        `;

        const response = await fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                chat_id: chatId,
                text: message,
                parse_mode: 'Markdown'
            })
        });

        const data = await response.json();

        // Check if the request was successful
        if (!response.ok) {
            throw new Error(`Telegram API error: ${data.description || 'Unknown error'}`);
        }

        return data;
    };

    const handleSubmit = async (e) => {

        // Prevent default if it's a form submission
        if (e && e.preventDefault) {
            e.preventDefault();
        }

        // Validate required fields
        if (!formState.name.trim() || !formState.email.trim() || !formState.message.trim()) {
            alert('Please fill in all required fields (Name, Email, and Message)');
            return;
        }

        // Basic email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(formState.email)) {
            alert('Please enter a valid email address');
            return;
        }

        setIsSubmitting(true);
        setSubmitStatus('loading');

        try {
            // Send data to Telegram
            await sendToTelegram(formState);
            setSubmitStatus('success');

            // Reset form
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
            alert(`Error sending message: ${error.message}`);

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
        <div className="contact-form glass-card">
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
                onClick={handleSubmit}
            >
                {getSubmitButtonContent()}
            </button>
        </div>
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