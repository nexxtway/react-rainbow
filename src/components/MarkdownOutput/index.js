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
        linkTarget,
        transformLinkUri,
        transformImageUri,
    } = props;

    const source = sourceInProps || '';
    const rawAbstractSyntaxTree = useMarkdownParser(source, parserOptions, plugins);
    const result = useSyntaxTreeJsxTranform(
        rawAbstractSyntaxTree,
        {
            linkTarget,
            transformLinkUri,
            transformImageUri,
        },
        customRenderers,
    );

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
    /** Sets the default target attribute for links. Default is undefined (no target attribute). */
    linkTarget: PropTypes.string,
    /**
     *  Function that gets called for each encountered link. The returned value is
     *  used in place of the original URI. If you want to disable the default transformer, pass
     *  null to this option.
     *  @param {string} uri
     *  @returns {string}
     */
    transformLinkUri: PropTypes.func,
    /**
     *  Function that gets called for each encountered image.
     *  The returned value is used in place of the original image src.
     *  @param {string} uri
     *  @returns {string}
     */
    transformImageUri: PropTypes.func,
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
    linkTarget: undefined,
    transformLinkUri: undefined,
    transformImageUri: undefined,
    plugins: [],
    parserOptions: undefined,
};
