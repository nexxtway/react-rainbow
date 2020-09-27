import React from 'react';
import PropTypes from 'prop-types';
import HitText from './hitText';
import { DefaultHitContainer, DefaultTextContainer } from './styled/index';

/**
 * HighlightedText is a component that highlights a part of a text.
 */

function HighlightedText(props) {
    const { style, className, parts, hitComponent, textComponent } = props;

    return (
        <div className={className} style={style}>
            <HitText
                parts={parts}
                hitComponent={hitComponent || DefaultHitContainer}
                textComponent={textComponent || DefaultTextContainer}
            />
        </div>
    );
}

export default HighlightedText;

HighlightedText.propTypes = {
    /** The class of the component. */
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
};

HighlightedText.defaultProps = {
    className: undefined,
    style: undefined,
    parts: undefined,
    hitComponent: undefined,
    textComponent: undefined,
};
