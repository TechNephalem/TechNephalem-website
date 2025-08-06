import { useState, useEffect } from 'react';

export const useCounter = (target, trigger) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        if (!trigger) return;

        let current = 0;
        const increment = target / 60;
        const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
                current = target;
                clearInterval(timer);
            }
            setCount(Math.floor(current));
        }, 16);

        return () => clearInterval(timer);
    }, [target, trigger]);

    return count;
};