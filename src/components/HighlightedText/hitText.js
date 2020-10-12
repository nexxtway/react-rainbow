import React from 'react';
import PropTypes from 'prop-types';

export default function HitText({
    parts,
    hitComponent: HitComponent,
    textComponent: TextComponent,
}) {
    return parts.map((part, index) => {
        const key = `part-${index}`;
        if (part.type === 'hit') {
            return <HitComponent key={key}>{part.value}</HitComponent>;
        }
        return <TextComponent key={key}>{part.value}</TextComponent>;
    });
}

HitText.propTypes = {
    parts: PropTypes.arrayOf(
        PropTypes.exact({
            value: PropTypes.string,
            type: PropTypes.string,
        }),
    ),
    hitComponent: PropTypes.elementType,
    textComponent: PropTypes.elementType,
};

HitText.defaultProps = {
    parts: undefined,
    hitComponent: undefined,
    textComponent: undefined,
};
