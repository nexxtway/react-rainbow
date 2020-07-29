import React from 'react';
import PropTypes from 'prop-types';
import useMarkdownToReact from './hooks/useMarkdownToReact';
import HighlightTheme from './highlightTheme';

export default function MarkdownOutput(props) {
    const { id, className, style, value, highlightTheme } = props;
    const result = useMarkdownToReact(value);
    return (
        <HighlightTheme id={id} className={className} style={style} theme={highlightTheme}>
            {result}
        </HighlightTheme>
    );
}

MarkdownOutput.propTypes = {
    /** The id of the outer element. */
    id: PropTypes.string,
    /** A CSS class for the outer element, in addition to the component's base classes. */
    className: PropTypes.string,
    /** An object with custom style applied to the outer element. */
    style: PropTypes.object,
    /** The markdown string to parse.  */
    value: PropTypes.string,
    highlightTheme: PropTypes.oneOf(['github-gist', 'github', 'dracula']),
};

MarkdownOutput.defaultProps = {
    id: undefined,
    className: undefined,
    style: undefined,
    value: '',
    highlightTheme: 'github-gist',
};
