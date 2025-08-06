import {
    Brain, Cloud, Blocks, Layers, Target, Eye, Users, Check, ArrowRight,
    Play, Sun, Moon, Menu, Github, ExternalLink, Quote, Star, Mail,
    Phone, MapPin, Linkedin, Twitter, Send, Loader, X, ChevronLeft,
    ChevronRight
} from 'lucide-react';
export const TestimonialCard = ({ testimonial, isActive }) => (
    <div className={`testimonial-card ${isActive ? 'active' : ''}`}>
        <div className="testimonial-content">
            <div className="testimonial-quote">
                <Quote />
                <p>{testimonial.content}</p>
            </div>
            <div className="testimonial-author">
                <div className="author-info">
                    <h4>{testimonial.name}</h4>
                    <p>{testimonial.role} at {testimonial.company}</p>
                </div>
                <div className="testimonial-rating">
                    {Array(testimonial.rating).fill().map((_, i) => (
                        <Star key={i} />
                    ))}
                </div>
            </div>
        </div>
    </div>
);