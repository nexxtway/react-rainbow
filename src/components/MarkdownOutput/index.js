import React from 'react';
import PropTypes from 'prop-types';
import { useMarkdownParser, useSyntaxTreeJsxTranform } from './hooks';

export default function MarkdownOutput(props) {
    const {
        id,
        className,
        style,
        source: sourceInProps,
        renderers: customRenderers,
        parserOptions,
        plugins,
    } = props;

    const source = sourceInProps || '';
    const rawAbstractSyntaxTree = useMarkdownParser(source, parserOptions, plugins);
    const result = useSyntaxTreeJsxTranform(rawAbstractSyntaxTree, customRenderers);

    return (
        <div id={id} className={className} style={style}>
            {result}
        </div>
    );
}

MarkdownOutput.propTypes = {
    /** The id of the outer element. */
    id: PropTypes.string,
    /** A CSS class for the outer element, in addition to the component's base classes. */
    className: PropTypes.string,
    /** An object with custom style applied to the outer element. */
    style: PropTypes.object,
    /** */
    source: PropTypes.string.isRequired,
    /** */
    renderers: PropTypes.object,
    /** */
    // linkTarget: PropTypes.string,
    /** */
    // transformLinkUri: PropTypes.function,
    /** */
    // transformImageUri: PropTypes.function,
    /** */
    plugins: PropTypes.array,
    /** */
    parserOptions: PropTypes.object,
};

MarkdownOutput.defaultProps = {
    id: undefined,
    className: undefined,
    style: undefined,
    renderers: undefined,
    // linkTarget: undefined,
    // transformLinkUri: () => {},
    // transformImageUri: () => {},
    plugins: [],
    parserOptions: undefined,
};
