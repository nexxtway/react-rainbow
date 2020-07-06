import React from 'react';
import PropTypes from 'prop-types';
import useMarkdownToReact from './hooks/useMarkdownToReact';
import defaultRenderers from './renderers';

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
    const result = useMarkdownToReact(source, parserOptions, plugins, {
        ...defaultRenderers,
        ...customRenderers,
    });
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
    /** The markdown source to parse. It is required.  */
    source: PropTypes.string.isRequired,
    /**
     *  An object where the keys represent the node type and the value is a React component.
     *  The object is merged with the default renderers. The props passed to the component
     *  varies based on the type of node.
     */
    renderers: PropTypes.object,
    /**
     *  An array of unified/remark parser plugins. If you need to pass options
     *  to the plugin, pass an array with two elements, the first being the
     *  plugin and the second being the options, for example:
     *  `{plugins: [[require('remark-shortcodes'), {your: 'options'}]]. (default: [])`
     *  Note that not all plugins can be used.
     */
    plugins: PropTypes.array,
    /** An object containing options to pass to remark-parse. */
    parserOptions: PropTypes.object,
};

MarkdownOutput.defaultProps = {
    id: undefined,
    className: undefined,
    style: undefined,
    renderers: undefined,
    plugins: [],
    parserOptions: undefined,
};
