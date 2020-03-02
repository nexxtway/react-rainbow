import { useState, useEffect } from 'react';

export default function useDrawerState(initialState) {
    const [firstRun, setFirstRun] = useState(true);
    const [drawerState, setDrawerState] = useState(null);

    useEffect(() => {
        console.log(firstRun, drawerState);
        if (firstRun) {
            setFirstRun(false);
            setDrawerState(initialState);
        }
    }, [firstRun, initialState]);

    return [drawerState, setDrawerState];
}
