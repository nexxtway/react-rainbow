import React from 'react';
import Application from './../../../src/components/Application';

export default function Wrapper({ children }) {
    return (
        <Application>
            {children}
        </Application>
    );
}
