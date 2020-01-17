import { useState, useRef, useEffect } from 'react';

const pageState = {
    pageName: window.location.hash.split('/')[1],
    examplesCount: 0,
    states: [],
};

function getIndexFromId(id) {
    return (Number(id) - 1) / 2;
}

function addStateToCache(index, stateName, stateValue) {
    if (!pageState.states[index]) {
        pageState.states[index] = {};
    }
    pageState.states[index][stateName] = stateValue;
}

function updateStateInCache(id, stateName, stateValue) {
    const index = getIndexFromId(id);
    pageState.states[index][stateName] = stateValue;
}

function registerExample(stateName, exampleId) {
    const id = exampleId || pageState.examplesCount * 2 + 1;
    const index = getIndexFromId(id);
    addStateToCache(index, stateName);
    pageState.examplesCount += 1;
    return id;
}

function resetPageState() {
    pageState.states = [];
    pageState.examplesCount = 0;
}

function getStateFromCache(id, stateName) {
    const index = getIndexFromId(id);
    try {
        return pageState.states[index][stateName];
    } catch (error) {
        return undefined;
    }
}

function urlChanged() {
    const pageName = window.location.hash.split('/')[1];
    if (pageState.pageName !== pageName) {
        pageState.pageName = pageName;
        resetPageState();
    }
    pageState.examplesCount = 0;
}

window.addEventListener('hashchange', urlChanged);

export default function useCachedState(stateName, initialValue) {
    const [state, setState] = useState(initialValue);
    const exampleId = useRef();

    useEffect(() => {
        exampleId.current = registerExample(stateName, window.location.hash.split('/')[2]);
        const cachedState = getStateFromCache(exampleId.current, stateName);
        if (cachedState) {
            setState(cachedState);
        }
    }, []);

    return [
        state,
        value => {
            updateStateInCache(exampleId.current, stateName, value);
            setState(value);
        },
    ];
}
