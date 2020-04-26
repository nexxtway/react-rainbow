import { useState, useEffect } from 'react';

export default function useTimer() {
    const [clock, setClock] = useState(new Date());

    useEffect(() => {
        let timerRef = setTimeout(function next() {
            setClock(new Date());
            timerRef = setTimeout(next, 60000);
        }, (60 - new Date().getSeconds()) * 1000);
        return () => clearTimeout(timerRef);
    }, []);
    return clock;
}
