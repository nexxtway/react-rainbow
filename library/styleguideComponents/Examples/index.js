/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import PropTypes from 'prop-types';
import Playground from 'react-styleguidist/lib/rsg-components/Playground';
import './styles.css';

export default function Examples({ examples, name, exampleMode }) {
    return (
        <article>
            {examples.map((example, index) => {
                const key = `example-${index}`;
                switch (example.type) {
                case 'code':
                    return (
                            <Playground
                                code={example.content}
                                evalInContext={example.evalInContext}
                                key={key}
                                name={name}
                                index={index}
                                settings={example.settings}
                                exampleMode={exampleMode} />
                    );
                case 'markdown':
                    return (
                        <p key={key} className="slds-text-heading_small slds-m-bottom_small slds-react-component-example-name-text">
                            {example.content}
                        </p>
                    );
                default:
                    return null;
                }
            })}
        </article>
    );
}

Examples.propTypes = {
    examples: PropTypes.array.isRequired,
    name: PropTypes.string.isRequired,
    exampleMode: PropTypes.string.isRequired,
};
