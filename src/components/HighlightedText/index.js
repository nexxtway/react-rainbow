import React from 'react';
import PropTypes from 'prop-types';
import HitText from './hitText';
import { defaultHitComponent, defaultTextComponent } from './defaultsContainers';
import { HighlightedContainer } from './styled/index';

function HighlightedText(props) {
    const { style, className, parts, HitComponent, TextComponent } = props;

    return (
        <HighlightedContainer className={className} style={style}>
            <HitText
                parts={parts}
                HitComponent={HitComponent || defaultHitComponent}
                TextComponent={TextComponent || defaultTextComponent}
            />
        </HighlightedContainer>
    );
}

export default HighlightedText;

HighlightedText.propTypes = {
    /** The class of the component. */
    className: PropTypes.string,
    /** An object with the custom styles. */
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
    HitComponent: PropTypes.func,
    /**
     * The component class or function that is going to be use to render
     * the text not highlighted
     */
    TextComponent: PropTypes.func,
};

HighlightedText.defaultProps = {
    className: undefined,
    style: undefined,
    parts: undefined,
    HitComponent: undefined,
    TextComponent: undefined,
};
