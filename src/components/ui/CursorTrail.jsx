import { useEffect, useRef } from "react";
import {
    Brain, Cloud, Blocks, Layers, Target, Eye, Users, Check, ArrowRight,
    Play, Sun, Moon, Menu, Github, ExternalLink, Quote, Star, Mail,
    Phone, MapPin, Linkedin, Twitter, Send, Loader, X, ChevronLeft,
    ChevronRight
} from 'lucide-react';
export const CursorTrail = () => {
    const cursorDotRef = useRef();
    const cursorOutlineRef = useRef();

    useEffect(() => {
        if (window.innerWidth <= 768) return;

        let mouseX = 0, mouseY = 0;
        let cursorX = 0, cursorY = 0;

        const handleMouseMove = (e) => {
            mouseX = e.clientX;
            mouseY = e.clientY;
        };

        const animateCursor = () => {
            const delay = 0.1;
            cursorX += (mouseX - cursorX) * delay;
            cursorY += (mouseY - cursorY) * delay;

            if (cursorDotRef.current) {
                cursorDotRef.current.style.transform = `translate(${mouseX - 4}px, ${mouseY - 4}px)`;
            }
            if (cursorOutlineRef.current) {
                cursorOutlineRef.current.style.transform = `translate(${cursorX - 20}px, ${cursorY - 20}px)`;
            }

            requestAnimationFrame(animateCursor);
        };

        document.addEventListener('mousemove', handleMouseMove);
        animateCursor();

        return () => {
            document.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    return (
        <>
            <div className="cursor-dot" ref={cursorDotRef}></div>
            <div className="cursor-outline" ref={cursorOutlineRef}></div>
        </>
    );
};