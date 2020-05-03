import 'core-js/modules/es.array.map';
import 'core-js/modules/es.function.name';
import React from 'react';
import PropTypes from 'prop-types';
import Playground from 'rsg-components/Playground';
import Markdown from 'rsg-components/Markdown';
import ExamplesRenderer from './ExamplesRenderer';
import CustomizationPage from '../../pages/CustomizationPage';

export default function Examples(_ref1, _ref2) {
    const { examples, name, exampleMode } = _ref1;
    const codeRevision = _ref2.codeRevision;

    if (name === 'Customization') {
        if (examples.length === 1) {
            return (
                <ExamplesRenderer name={name}>
                    <div className="react-rainbow-customization_container">
                        <Playground
                            code={examples[0].content}
                            evalInContext={examples[0].evalInContext}
                            key={`${codeRevision}/0`}
                            name={name}
                            index={0}
                            settings={examples[0].settings}
                            exampleMode={exampleMode}
                        />
                    </div>
                </ExamplesRenderer>
            );
        }
        return (
            <ExamplesRenderer name={name}>
                <CustomizationPage {..._ref1} codeRevision={codeRevision} />
            </ExamplesRenderer>
        );
    }

    return (
        <ExamplesRenderer name={name}>
            {examples.map((example, index) => {
                switch (example.type) {
                    case 'code':
                        return (
                            <Playground
                                code={example.content}
                                evalInContext={example.evalInContext}
                                key={`${codeRevision}/${index}`}
                                name={name}
                                index={index}
                                settings={example.settings}
                                exampleMode={exampleMode}
                            />
                        );
                    case 'markdown':
                        return <Markdown text={example.content} key={index} />;
                    default:
                        return null;
                }
            })}
        </ExamplesRenderer>
    );
}

Examples.propTypes = {
    examples: PropTypes.array.isRequired,
    name: PropTypes.string.isRequired,
    exampleMode: PropTypes.string.isRequired,
};
Examples.contextTypes = {
    codeRevision: PropTypes.number.isRequired,
};
