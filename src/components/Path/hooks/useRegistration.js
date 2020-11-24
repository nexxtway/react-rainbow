import { useState, useCallback } from 'react';

export default function useRegistration() {
    const registeredSteps = useRef([]);

    const registerStep = useCallback(step => registeredSteps.current.push(step), []);

    const unregisterStep = useCallback(({ name }) => {
        registeredSteps.current = registeredSteps.current.filter(step => step.name !== name);
    }, []);

    return { registeredSteps: registeredSteps.current, registerStep, unregisterStep };
}
