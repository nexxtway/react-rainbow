import React from 'react';

export default function buildInstanceOfType(data, key) {
    return (
        <div key={key}>
            <code className="react-rainbow-prop-type-label">
                instanceOf(<span className="react-rainbow-prop-name-label">{data}</span>)
            </code>
        </div>
    );
}
