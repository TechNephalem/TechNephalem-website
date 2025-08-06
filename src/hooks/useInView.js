import { useState, useEffect, useRef } from 'react';

export const useInView = (options = {}) => {
    const [isInView, setIsInView] = useState(false);
    const ref = useRef();

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => setIsInView(entry.isIntersecting),
            { threshold: 0.1, ...options }
        );

        if (ref.current) observer.observe(ref.current);

        return () => observer.disconnect();
    }, []);

    return [ref, isInView];
};