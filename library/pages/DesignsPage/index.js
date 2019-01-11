import React from 'react';
import './styles.css';

const anchorStyles = {
    marginRight: 16,
};

export default function DesignsPage() {
    return (
        <div className="react-rainbow-designs_view-port">
            <h1 className="react-rainbow-designs_header">
                Discover our designs
            </h1>
            <a style={anchorStyles} href="/#/Designs/RainbowComponents">Raibow Components</a>
            <a style={anchorStyles} href="/#/Designs/Admin">Administration</a>
            <a style={anchorStyles} href="/#/Designs/Authentication">Authentication</a>
        </div>
    );
}
