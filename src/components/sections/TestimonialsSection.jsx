import {
    Brain, Cloud, Blocks, Layers, Target, Eye, Users, Check, ArrowRight,
    Play, Sun, Moon, Menu, Github, ExternalLink, Quote, Star, Mail,
    Phone, MapPin, Linkedin, Twitter, Send, Loader, X, ChevronLeft,
    ChevronRight
} from 'lucide-react';
import { TestimonialCard } from '../cards/TestimonialCard';
import { useState, useEffect } from 'react';
import { appData } from '../../data/appData';
export const TestimonialsSection = () => {
    const [currentTestimonial, setCurrentTestimonial] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentTestimonial(prev =>
                (prev + 1) % appData.testimonials.length
            );
        }, 8000);

        return () => clearInterval(interval);
    }, []);

    const handlePrevious = () => {
        setCurrentTestimonial(prev =>
            prev === 0 ? appData.testimonials.length - 1 : prev - 1
        );
    };

    const handleNext = () => {
        setCurrentTestimonial(prev =>
            (prev + 1) % appData.testimonials.length
        );
    };

    const goToTestimonial = (index) => {
        setCurrentTestimonial(index);
    };

    return (
        <section id="testimonials" className="section section--bg">
            <div className="container">
                <div className="section-header">
                    <div className="section-badge">Client Testimonials</div>
                    <h2 className="section-title split-text">What Our Clients Say</h2>
                    <p className="section-subtitle">Real feedback from satisfied clients and partners</p>
                </div>
                <div className="testimonials-carousel">
                    <div className="testimonials-track">
                        {appData.testimonials.map((testimonial, index) => (
                            <TestimonialCard
                                key={index}
                                testimonial={testimonial}
                                isActive={index === currentTestimonial}
                            />
                        ))}
                    </div>
                    <div className="carousel-controls">
                        <button className="carousel-btn prev-btn" onClick={handlePrevious}>
                            <ChevronLeft />
                        </button>
                        <div className="carousel-dots">
                            {appData.testimonials.map((_, index) => (
                                <button
                                    key={index}
                                    className={`carousel-dot ${index === currentTestimonial ? 'active' : ''}`}
                                    onClick={() => goToTestimonial(index)}
                                />
                            ))}
                        </div>
                        <button className="carousel-btn next-btn" onClick={handleNext}>
                            <ChevronRight />
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};