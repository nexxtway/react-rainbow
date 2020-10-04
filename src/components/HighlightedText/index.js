import React from 'react';
import PropTypes, { bool } from 'prop-types';
import HitText from './hitText';
import HighlighContainer from './highlighContainer';
import { DefaultHitContainer, DefaultTextContainer } from './styled/index';

/**
 * HighlightedText is a component that highlights a part of a text.
 */

export default function HighlightedText(props) {
    const { style, className, parts, hitComponent, textComponent, isInline } = props;
    const finalHitContainer = hitComponent || DefaultHitContainer;
    const finalTextContainer = textComponent || DefaultTextContainer;

    return (
        <HighlighContainer className={className} style={style} isInline={isInline}>
            <HitText
                parts={parts}
                hitComponent={finalHitContainer}
                textComponent={finalTextContainer}
            />
        </HighlighContainer>
    );
}

HighlightedText.propTypes = {
    /** A CSS class for the outer element, in addition to the component's base classes. */
    className: PropTypes.string,
    /** An object with the custom styles of the container. */
    style: PropTypes.object,
    /** An array of objects with the text and the part to be highlighted */
    parts: PropTypes.arrayOf(
        PropTypes.exact({
            value: PropTypes.string,
            type: PropTypes.string,
        }),
    ),
    /**
     * The component class or function that is going to be use to render
     * the highlighted text
     */
    hitComponent: PropTypes.elementType,
    /**
     * The component class or function that is going to be use to render
     * the text not highlighted
     */
    textComponent: PropTypes.elementType,
    /** A boolean that when it is true wraps the text in a span tag, and when it is false wraps it in a p tag, this lets you display the text block or inline */
    isInline: bool,
};

HighlightedText.defaultProps = {
    className: undefined,
    style: undefined,
    parts: undefined,
    hitComponent: undefined,
    textComponent: undefined,
    isInline: false,
};
