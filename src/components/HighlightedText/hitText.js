import React from 'react';
import PropTypes from 'prop-types';

function hitText({ parts, hitComponent: HitComponent, textComponent: TextComponent }) {
    return parts.map((part, index) => {
        const key = `part-${index}`;
        if (part.type === 'hit') {
            return <HitComponent key={key}>{part.value}</HitComponent>;
        }
        return <TextComponent key={key}>{part.value}</TextComponent>;
    });
}

export default hitText;

hitText.propTypes = {
    parts: PropTypes.arrayOf(
        PropTypes.exact({
            value: PropTypes.string,
            type: PropTypes.string,
        }),
    ),
    hitComponent: PropTypes.elementType,
    textComponent: PropTypes.elementType,
};

hitText.defaultProps = {
    parts: undefined,
    hitComponent: undefined,
    textComponent: undefined,
};
